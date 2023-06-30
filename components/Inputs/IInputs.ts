import React from 'react';

export interface IInputs
    extends React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    label?: string;
    className?: string;
    labelClassName?: string;
    errorMessage?: string;
    error?: boolean;
}
