import React from 'react';

export interface IInputs extends React.HTMLProps<HTMLInputElement> {
    className?: string;
    labelClassName?: string;
    errorMessage?: string;
    error?: boolean;
}
