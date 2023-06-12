import React, { FC } from 'react';
import { IInput } from './IInput';
import Icon from '../../Icon/Icon';
import classes from './Input.module.scss';
import { twMerge } from 'tailwind-merge';
import Label from '../Label/Label';
import Error from '../Error/Error';

const Input: FC<IInput> = ({
    label,
    iconRightName,
    iconLeftName,
    className,
    labelClassName,
    error,
    errorMessage,
    required,
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
                <Label
                    label={label}
                    error={error}
                    required={required}
                    labelClassName={labelClassName}
                />
                <div className='relative'>
                    {iconRightName && (
                        <Icon
                            iconName={iconRightName}
                            className='absolute top-4 right-3'
                        />
                    )}
                    <input
                        {...props}
                        required={false}
                        className={`${classes.input}
                            ${error ? 'border-error' : ''}
                            ${iconRightName ? classes.hasIconRight : ''}
                            `}
                    />
                    {iconLeftName && (
                        <Icon
                            iconName={iconLeftName}
                            className='absolute top-4 left-3'
                        />
                    )}
                </div>
            </label>
            {error && errorMessage && <Error errorMessage={errorMessage} />}
        </div>
    );
};

export default Input;
