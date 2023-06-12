import React, { FC, PropsWithChildren } from 'react';
import { IText } from './IText';
import classes from './Text.module.scss';

const Text: FC<PropsWithChildren & IText> = ({
    color,
    variant,
    className,
    children,
}) => {
    const HTMLTAG = variant!;
    return (
        <HTMLTAG
            className={`${classes[variant!]} ${classes[color!]} ${className}`}
        >
            {children}
        </HTMLTAG>
    );
};

Text.defaultProps = {
    variant: 'p',
    color: 'text',
};

export default Text;
