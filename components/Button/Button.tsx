import React, { FC } from 'react';
import { IButton } from './IButton';
import classes from './Button.module.scss';
import Icon from '../Icon/Icon';
import Link from 'next/link';
import Loading from '../Loading/Loading';

const Button: FC<IButton> = ({
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
                <Loading />
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
