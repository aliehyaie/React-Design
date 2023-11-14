import Label from '../Label';
import Icon from "../../Icon";
import classes from './styles.module.scss';
import type { FC } from 'react';
import type { CheckboxProps } from './props';

const Checkbox: FC<CheckboxProps> = ({
    label,
    error,
    className,
    labelClassName,
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
                        {...props}
                    />
                    <div className={classes.btn}>
                        <Icon
                            className='text-white'
                            iconName='icon-checkmark'
                        />
                    </div>
                </div>
                {label && (
                    <Label
                        label={label}
                        error={error}
                        labelClassName={labelClassName}
                    />
                )}
            </label>
        </div>
    );
};

export default Checkbox;
