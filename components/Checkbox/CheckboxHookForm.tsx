import React from 'react';
import classes from './Checkbox.module.scss';
import { ICheckbox } from './ICheckbox';
import Text from '../Text/Text';
import { twMerge } from 'tailwind-merge';
import Icon from '../Icon/Icon';

const CheckboxHookForm: React.FC<ICheckbox> = ({
    className,
    labelClassName,
    checkboxBtnClassName,
    register,
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
                        {...register?.(props.name || props.label || '', {
                            required: true,
                        })}
                        {...props}
                    />
                    <div className={`${classes.btn} ${checkboxBtnClassName}`}>
                        <Icon
                            className='text-white'
                            iconName='icon-checkmark'
                        />
                    </div>
                </div>
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

export default CheckboxHookForm;
