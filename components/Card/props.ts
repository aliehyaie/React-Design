import type {ReactElement} from "react";

export interface CardProps {
    title?: string;
    subtitle?: string;
    header?: ReactElement;
    footer?: ReactElement;
    className?: string;
}
