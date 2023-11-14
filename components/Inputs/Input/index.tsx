import Label from '../Label';
import Error from "../Error";
import Icon from "../../Icon";
import { twMerge } from 'tailwind-merge';
import classes from './styles.module.scss';
import type { FC } from 'react';
import type { InputProps } from './props';

const Input: FC<InputProps> = ({
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
                            className='absolute right-3 top-4'
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
                            className='absolute left-3 top-4'
                        />
                    )}
                </div>
            </label>
            {error && errorMessage && <Error errorMessage={errorMessage} />}
        </div>
    );
};

export default Input;
