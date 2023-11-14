import type {ButtonHTMLAttributes} from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    leadingIconName?: string;
    helperIconName?: string;
    iconPos?: 'right' | 'left';
    color?: 'primary' | 'text' | 'secondary' | 'custom';
    isLoading?: boolean;
    className?: string;
    variant?: 'filled' | 'outlined' | 'tonal' | 'text';
    isLink?: boolean;
    href?: string;
    shape?: 'normal' | 'chips';
}
