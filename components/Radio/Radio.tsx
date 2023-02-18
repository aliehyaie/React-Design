import React from 'react';
import { IRadio } from './IRadio';
import classes from './Radio.module.scss';
import Text from '../Text/Text';
import { twMerge } from 'tailwind-merge';

const Radio: React.FC<IRadio> = ({ className, labelClassName, ...props }) => {
    /*
    const [field] = useField({...props as FieldHookConfig<any>});

    return (
        <div className={className}>
            <label htmlFor={props.id || props.name} className={classes.label}>
                <input className={classes.radioInput}
                       type='radio'
                       {...field}
                       id={props.id || props.name}
                       {...props}
                />
                <div className={classes.radio}/>
                {props.label && <Text variant='span'
                                      className={twMerge('block cursor-pointer', labelClassName)}>{props.label}</Text>}
            </label>
        </div>
    );
*/

    return (
        <div className={className}>
            <label htmlFor={props.id || props.name} className={classes.label}>
                <input
                    className={classes.radioInput}
                    type='radio'
                    id={props.id || props.name}
                    {...props}
                />
                <div className={classes.radio} />
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

export default Radio;
