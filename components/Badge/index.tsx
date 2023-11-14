import classes from './styles.module.scss';
import type { FC } from 'react';
import type { BadgeProps } from './props';

const Badge: FC<BadgeProps> = ({
    position = 'bottomLeft',
    value = '',
    severity = 'success',
    isAbsolute,
    type = 'normal',
    className = '',
}) => {
    return (
        <span
            className={`${classes.badge} 
            ${isAbsolute ? classes.absoluteBadge : ''}
                ${classes[`${position}`]}
               ${classes[`${severity}`]}
               ${type === 'circular' ? classes.circular : classes.normal}
               ${className}
            `}
        >
            {value}
        </span>
    );
};

export default Badge;
