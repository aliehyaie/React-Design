import React from 'react';
import { IBadge } from './IBadge';
import classes from './Badge.module.scss';

const Badge: React.FC<IBadge> = ({
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
