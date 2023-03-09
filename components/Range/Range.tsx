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
            calculateProgress(minVal, maxVal);
        } else {
            calculateProgress(minVal);
        }
    };

    return (
        <div className='ltr'>
            <div className={classes.slider}>
                {showIndicators ? <></> : null}
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
