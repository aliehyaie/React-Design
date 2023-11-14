import {
    Children,
    type FC,
    type PropsWithChildren,
    type ReactElement,
} from 'react';

const Then: FC<PropsWithChildren> = ({ children }) => <>{children}</>;

const Else: FC<PropsWithChildren> = ({ children }) => <>{children}</>;

const If: FC<PropsWithChildren & { condition?: unknown }> = ({
    children,
    condition,
}) => {
    if (!children) return null;

    const childrenArray = Children.toArray(children) as ReactElement[];

    // Render Then block if the condition is truthy
    if (condition) {
        return <>{childrenArray.find(child => child.type === Then)}</>;
    }

    // Render Else block if the condition is falsy
    return <>{childrenArray.find(child => child.type === Else)}</>;
};

export { If, Then, Else };
