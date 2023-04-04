import React from 'react';
import { IInput } from './IInput';
import Icon from '../Icon/Icon';
import classes from './Input.module.scss';
import { twMerge } from 'tailwind-merge';

const InputHookForm: React.FC<IInput> = ({
    iconRightName,
    iconLeftName,
    width,
    className,
    labelClassName,
    register,
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
                <span className={twMerge('inline-block mb-2', labelClassName)}>
                    {props.label}
                </span>
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
                        {...register?.(props.name || props.label || '', {
                            required: true,
                        })}
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

export default InputHookForm;
