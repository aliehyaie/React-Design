import React from 'react';

export interface ICheckbox extends React.HTMLProps<HTMLInputElement> {
    className?: string;
    labelClassName?: string;
    checkboxBtnClassName?: string;
}
