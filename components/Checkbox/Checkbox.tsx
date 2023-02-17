import React from 'react';
import classes from './Checkbox.module.scss';
import { ICheckbox } from './ICheckbox';
import Text from '../Text/Text';
import { twMerge } from 'tailwind-merge';
import Icon from '../Icon/Icon';

const Checkbox: React.FC<ICheckbox> = ({
    className,
    labelClassName,
    checkboxBtnClassName,
    ...props
}) => {
    /*    const [field] = useField({...props as FieldHookConfig<any>});

    return <div className={className}>
        <label htmlFor={props.id || props.name} className={`${classes.label}`}>
            <div className={`${classes.checkbox}`}>
                <input className={classes.checkboxInput} type='checkbox'
                       {...field}
                       id={props.id || props.name}
                       {...props}/>
                <div className={`${classes.btn} ${checkboxBtnClassName}`}>
                    <Icon iconEl={<CheckIcon />} svgClassName='fill-white' iconWidth={12} iconHeight={12}/>
                </div>
            </div>
            {props.label &&
                <Text variant='span' className={twMerge('block cursor-pointer', labelClassName)}>{props.label}</Text>}
        </label>
    </div>*/

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

export default Checkbox;
