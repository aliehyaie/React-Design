import React from 'react';
import { IButton } from './IButton';
import classes from './Button.module.scss';
import Icon from '../Icon/Icon';
import Link from 'next/link';
import Loader from '../Loader/Loader';

const Button: React.FC<IButton> = ({
    label,
    leadingIconName,
    helperIconName,
    iconPos,
    color,
    isLoading,
    className,
    variant,
    shape,
    isLink,
    href,
    ...props
}) => {
    const ButtonEl = (
        <button
            {...props}
            disabled={props.disabled || isLoading}
            className={`${classes.button} ${classes[shape!]} ${
                classes[color!]
            } ${classes[variant!]}
                              ${leadingIconName ? classes.leading : ''}
                              ${className}`}
        >
            {isLoading ? (
                <Loader />
            ) : leadingIconName ? (
                <Icon iconName={leadingIconName} />
            ) : (
                <>
                    {iconPos === 'right' && helperIconName && (
                        <Icon iconName={helperIconName} />
                    )}
                    <span>{label}</span>
                    {iconPos === 'left' && helperIconName && (
                        <Icon iconName={helperIconName} />
                    )}
                </>
            )}
        </button>
    );
    return isLink ? <Link href={href!}>{ButtonEl}</Link> : ButtonEl;
};

Button.defaultProps = {
    color: 'primary',
    iconPos: 'right',
    variant: 'filled',
    shape: 'normal',
    href: '',
};

export default Button;
