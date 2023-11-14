import type {MouseEvent} from "react";

export interface IconProps {
    iconName: string;
    className?: string;
    onClick?: (e: MouseEvent<HTMLSpanElement>) => void;
}
