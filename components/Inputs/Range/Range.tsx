import React, { MutableRefObject, useEffect, useRef } from 'react';
import classes from './Range.module.scss';
import { IRange } from './IRange';

const Range: React.FC<IRange> = ({
    min,
    max,
    value,
    isSingle,
    step,
    priceGap,
    showIndicators,
    onChange,
    className,
}) => {
    const minRangeValueRef = useRef() as MutableRefObject<HTMLInputElement>;
    const maxRangeValueRef = useRef() as MutableRefObject<HTMLInputElement>;
    const progressRef = useRef() as MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        minRangeValueRef.current.value = isSingle
            ? value!.toString()
            : value![0].toString();
        if (!isSingle) {
            maxRangeValueRef.current.value = value![1].toString();
            calculateProgress(value![0], value![1]);
        } else {
            calculateProgress(+value!);
        }
    }, []);

    const calculateProgress = (minVal: number, maxVal?: number) => {
        if (isSingle) {
            progressRef.current.style.right = 100 - (minVal / max!) * 100 + '%';
            progressRef.current.style.left = '0';
        } else {
            progressRef.current.style.left = (minVal / max!) * 100 + '%';
            progressRef.current.style.right =
                100 - (maxVal! / max!) * 100 + '%';
        }
    };

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const rangeInputId = e.target.id;
        let minVal = +minRangeValueRef.current.value;
        if (!isSingle) {
            let maxVal = +maxRangeValueRef.current.value;
            if (maxVal - minVal < priceGap!) {
                if (rangeInputId === 'minRange') {
                    minRangeValueRef.current.value = (
                        maxVal - priceGap!
                    ).toString();
                    minVal = +minRangeValueRef.current.value;
                } else {
                    maxRangeValueRef.current.value = (
                        minVal + priceGap!
                    ).toString();
                    maxVal = +maxRangeValueRef.current.value;
                }
            }
            onChange([minVal, maxVal]);
            calculateProgress(minVal, maxVal);
        } else {
            /*
            const rangeInput = e.target;
            const thumbWidth = 16;
            const off =
                (rangeInput.clientWidth - thumbWidth) /
                (parseInt(rangeInput.max) - parseInt(rangeInput.min));
            const px =
                (rangeInput.valueAsNumber - parseInt(rangeInput.min)) * off -
                rangeInput.clientWidth / 2 +
                thumbWidth / 2;
*/
            onChange(minVal);
            calculateProgress(minVal);
        }
    };
    /*
    const [separators, setSeperators] = useState<number[]>([]);
    useEffect(() => {
        /!* const thumbWidth = 16;
         const rangeInput = minRangeValueRef.current;

         const off =
             (rangeInput.clientWidth - thumbWidth) /
             (max! - min!);
         let px: number[] = [];
         for (let i = 0; i <= max!; i += step!) {
              px.push(
                 ((i - min!) * off ) -
                 (rangeInput.clientWidth / 2) +
                 (thumbWidth / 2));

         }*!/
        const segments = Math.floor(max! / step!);
        const distances = minRangeValueRef.current.clientWidth / segments;
        let px: number[] = [];
        for (let i = 0; i <= segments; i++) {
            if (i === segments) {
                px.push(i * distances - 1);
            } else {
                px.push(i * distances);
            }
        }
        setSeperators(px);
    }, []);
*/

    return (
        <div className={`ltr ${className}`}>
            <div className={classes.slider}>
                {showIndicators ? (
                    <>
                        {/*  {separators.map(separator => (
                            <div
                                key={separator}
                                style={{
                                    position:'absolute',
                                    left: separator + 'px',
                                    width: '1px',
                                    height: '10px',
                                    backgroundColor: 'coral',
                                }}
                            >df</div>
                        ))}*/}
                    </>
                ) : null}
                <div ref={progressRef} className={classes.progress} />
            </div>
            <div className={classes.rangeInput}>
                <input
                    type='range'
                    id='minRange'
                    className={classes.rangeMin}
                    min={min}
                    max={max}
                    step={step}
                    onChange={changeHandler}
                    ref={minRangeValueRef}
                />
                {!isSingle && (
                    <input
                        type='range'
                        id='maxRange'
                        className={classes.rangeMax}
                        min={min}
                        max={max}
                        step={step}
                        onChange={changeHandler}
                        ref={maxRangeValueRef}
                    />
                )}
            </div>
        </div>
    );
};

Range.defaultProps = {
    min: 0,
    max: 10000,
    isSingle: true,
    value: 0,
    step: 1000,
    priceGap: 1000,
};

export default Range;
