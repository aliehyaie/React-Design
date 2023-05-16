import React from 'react';
import classes from './Switch.module.scss';
import { ISwitch } from './ISwitch';
import { twMerge } from 'tailwind-merge';
import Icon from '../../Icon/Icon';
import Label from '../Label/Label';

const Switch: React.FC<ISwitch> = ({
    label,
    error,
    rounded,
    className,
    labelClassName,
    ...props
}) => {
    return (
        <div className={twMerge('flex items-center gap-2', className)}>
            {label && (
                <Label
                    label={label}
                    error={error}
                    labelClassName={`self-center ${labelClassName}`}
                />
            )}
            <label className={`${classes.switch}`}>
                <input
                    className={classes.switchInput}
                    type='checkbox'
                    {...props}
                />
                <div
                    className={`${classes.slider} ${
                        rounded ? classes.rounded : ''
                    }`}
                >
                    <div className={classes.btn}>
                        <Icon iconName='icon-checkmark' />
                    </div>
                </div>
            </label>
        </div>
    );
};

Switch.defaultProps = {
    rounded: true,
};

export default Switch;
