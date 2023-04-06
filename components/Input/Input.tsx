import React from 'react';
import { IInput } from './IInput';
import Icon from '../Icon/Icon';
import classes from './Input.module.scss';
import { twMerge } from 'tailwind-merge';
import Text from '../Text/Text';

const Input: React.FC<IInput> = ({
    iconRightName,
    iconLeftName,
    width,
    className,
    labelClassName,
    ...props
}) => {
    return (
        <div className={twMerge('flex flex-col gap-2', className)}>
            <label
                className={`${classes.label}
                    ${props.readOnly ? classes.readOnly : ''}
                    ${props.disabled ? classes.disabled : ''}
                `}
            >
                <Text className={twMerge('inline-block mb-2', labelClassName)}>
                    {props.label || ''}
                </Text>
                <div className='relative'>
                    {iconRightName && (
                        <Icon
                            iconName={iconRightName}
                            className='absolute top-4 right-3'
                        />
                    )}
                    <input
                        className={`${classes.input}
                            ${iconRightName ? classes.hasIconRight : ''}
                            `}
                        width={width}
                        {...props}
                    />
                    {iconLeftName && (
                        <Icon
                            iconName={iconLeftName}
                            className='absolute top-4 left-3'
                        />
                    )}
                </div>
            </label>
        </div>
    );
};

export default Input;
