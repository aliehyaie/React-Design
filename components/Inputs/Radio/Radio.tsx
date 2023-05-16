import React from 'react';
import { IRadio } from './IRadio';
import classes from './Radio.module.scss';
import Label from '../Label/Label';

const Radio: React.FC<IRadio> = ({
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
