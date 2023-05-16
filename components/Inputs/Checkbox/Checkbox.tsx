import React from 'react';
import classes from './Checkbox.module.scss';
import { ICheckbox } from './ICheckbox';
import Icon from '../../Icon/Icon';
import Label from '../Label/Label';

const Checkbox: React.FC<ICheckbox> = ({
    label,
    error,
    className,
    labelClassName,
    ...props
}) => {
    return (
        <div className={className}>
            <label
                htmlFor={props.id || props.name}
                className={`${classes.label}`}
            >
                <div className={`${classes.checkbox}`}>
                    <input
                        className={classes.checkboxInput}
                        type='checkbox'
                        id={props.id || props.name}
                        {...props}
                    />
                    <div className={classes.btn}>
                        <Icon
                            className='text-white'
                            iconName='icon-checkmark'
                        />
                    </div>
                </div>
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

export default Checkbox;
