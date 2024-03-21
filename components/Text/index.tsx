import classes from './styles.module.scss';
import type { FC, PropsWithChildren } from 'react';
import type { TextProps } from './props';

const Text: FC<PropsWithChildren & TextProps> = ({
    color = 'text',
    variant = 'p',
    className,
    children,
}) => {
    const HTMLTAG = variant;
    return (
        <HTMLTAG
            className={`${classes[variant]} ${classes[color]} ${className}`}
        >
            {children}
        </HTMLTAG>
    );
};

export default Text;
