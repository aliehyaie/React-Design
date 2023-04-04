import { IRadio } from './IRadio';
import classes from './Radio.module.scss';
import Text from '../Text/Text';
import { twMerge } from 'tailwind-merge';

const Radio: React.FC<IRadio> = ({
    className,
    labelClassName,
    register,
    ...props
}) => {
    return (
        <div className={className}>
            <label htmlFor={props.id || props.name} className={classes.label}>
                <input
                    className={classes.radioInput}
                    type='radio'
                    id={props.id}
                    {...register?.(props.name || props.label || '', {
                        required: true,
                    })}
                    {...props}
                />
                <div className={classes.radio} />
                {props.label && (
                    <Text
                        variant='span'
                        className={twMerge(
                            'block cursor-pointer',
                            labelClassName
                        )}
                    >
                        {props.label}
                    </Text>
                )}
            </label>
        </div>
    );
};

export default Radio;
