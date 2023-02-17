import React from 'react';
import { IInput } from './IInput';
import Icon from '../Icon/Icon';
import classes from './Input.module.scss';
import { twMerge } from 'tailwind-merge';

const Input: React.FC<IInput> = ({
    iconRightName,
    iconLeftName,
    width,
    className,
    labelClassName,
    ...props
}) => {
    /* const [field, meta] = useField({...props as FieldHookConfig<any>, type: 'text'});
    const svgElClasses = twMerge('', svgClassName);
    const pathElClasses = twMerge('', pathClassName);
    const showError = meta.touched && meta.error;
    return (
        <div className={twMerge('flex flex-col gap-2', className)}>
            <label className={`${classes.label}
                    ${props.readOnly ? classes.readOnly : ''}
                    ${props.disabled ? classes.disabled : ''}
                `}>
               <span className={twMerge(`inline-block mb-2 ${showError ? 'text-error' : ''}`, labelClassName)}>
                   {props.label}
               </span>
                <div className='relative'>
                    {iconRightEl &&
                        <Icons iconEl={iconRightEl} iconWidth={iconWidth} iconHeight={iconHeight}
                               svgClassName='absolute top-4 right-3'
                        />}
                    <input className={`${classes.input}
                            ${iconRightEl ? classes.hasIconRight : ''}
                            `}
                           width={width}
                           {...field}
                           {...props}
                    />
                    {iconLeftEl &&
                        <Icons iconEl={iconLeftEl} iconWidth={iconWidth} iconHeight={iconHeight}
                               svgClassName='absolute top-4 left-3'
                        />}
                </div>
            </label>
            {showError ? (
                <div className={twMerge('text-xs text-error')}>{meta.error}</div>
            ) : null}
        </div>
    );*/

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
