/* eslint-disable react/jsx-no-useless-fragment */
import {
    Children,
    isValidElement,
    useEffect,
    useRef,
    type ReactElement,
} from 'react';
import type {CaseProps, SwitchProps} from './props';

const Case: CaseProps = ({ children }) => <>{children}</>;

const Default: CaseProps = ({ children }) => <>{children}</>;

const Switch: SwitchProps = ({ children, expression }) => {
    const matchingCaseRef = useRef<ReactElement>();
    const defaultCaseRef = useRef<ReactElement>();

    useEffect(() => {
        matchingCaseRef.current = undefined;
        defaultCaseRef.current = undefined;
    }, [children]);

    if (!children) return null;

    Children.forEach(children, child => {
        if (!isValidElement(child)) return;

        if (!matchingCaseRef.current && child.type === Case) {
            // const conditionResult = Boolean(expression) === Boolean(child.props.value);
            const conditionResult = expression === child.props.value;

            if (conditionResult) {
                matchingCaseRef.current = child;
            }
        } else if (!defaultCaseRef.current && child.type === Default) {
            defaultCaseRef.current = child;
        }
    });

    return matchingCaseRef.current ?? defaultCaseRef.current ?? null;
};

export { Switch, Case, Default };
