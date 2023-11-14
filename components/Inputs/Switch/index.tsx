import Icon from "../../Icon";
import Label from '../Label';
import { twMerge } from 'tailwind-merge';
import classes from './styles.module.scss';
import type { FC } from 'react';
import type { SwitchProps } from './props';

const Switch: FC<SwitchProps> = ({
    label,
    error,
    rounded=true,
    className,
    labelClassName,
    ...props
}) => {
    return (
        <div className={twMerge('flex items-center gap-2', className)}>
            {label && (
                <Label
                    label={label}
                    error={error}
                    labelClassName={`self-center ${labelClassName}`}
                />
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

export default Switch;
