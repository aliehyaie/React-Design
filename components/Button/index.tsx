import Link from 'next/link';
import Loading from '../Loading';
import Icon from "../Icon";
import classes from './styles.module.scss';
import type { FC } from 'react';
import type {ButtonProps} from './props';

const Button: FC<ButtonProps> = ({
    label,
    leadingIconName,
    helperIconName,
    iconPos ="right",
    color = "primary",
    isLoading,
    className,
    variant = "filled",
    shape = "normal",
    isLink,
    href= "",
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

export default Button;
