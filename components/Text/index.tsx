import classes from './styles.module.scss';
import type { FC, PropsWithChildren } from 'react';
import type { TextProps } from './props';

const Index: FC<PropsWithChildren & TextProps> = ({
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

Index.defaultProps = {
    variant: 'p',
    color: 'text',
};

export default Index;
