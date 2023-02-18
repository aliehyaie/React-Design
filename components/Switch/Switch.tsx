import React from 'react';
import classes from './Switch.module.scss';
import { ISwitch } from './ISwitch';
import Text from '../Text/Text';
import { twMerge } from 'tailwind-merge';
import Icon from '../Icon/Icon';

const Switch: React.FC<ISwitch> = ({
    rounded,
    className,
    labelClassName,
    ...props
}) => {
    /* const [field] = useField({ ...(props as FieldHookConfig<any>) });
     */
    return (
        <div className={className}>
            {props.label && (
                <Text
                    variant='span'
                    className={twMerge('block' + labelClassName)}
                >
                    {props.label}
                </Text>
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
