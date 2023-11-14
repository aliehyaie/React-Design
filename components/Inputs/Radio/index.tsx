import Label from '../Label';
import classes from './styles.module.scss';
import type { FC } from 'react';
import type {RadioProps} from './props';

const Radio: FC<RadioProps> = ({
    className,
    labelClassName,
    label,
    error,
    ...props
}) => {
    return (
        <div className={className}>
            <label htmlFor={props.id || props.name} className={classes.label}>
                <input
                    className={classes.radioInput}
                    type='radio'
                    id={props.id}
                    {...props}
                />
                <div className={classes.radio} />
                {label && (
                    <Label
                        label={label}
                        error={error}
                        labelClassName={labelClassName}
                    />
                )}
            </label>
        </div>
    );
};

export default Radio;
