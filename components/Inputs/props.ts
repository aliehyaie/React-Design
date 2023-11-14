import type {DetailedHTMLProps, InputHTMLAttributes} from "react";

export interface InputsProps
    extends DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    label?: string;
    className?: string;
    labelClassName?: string;
    errorMessage?: string;
    error?: boolean;
}
