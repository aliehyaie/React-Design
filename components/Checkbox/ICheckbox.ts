import React from 'react';
import { UseFormRegister } from 'react-hook-form';

export interface ICheckbox extends React.HTMLProps<HTMLInputElement> {
    className?: string;
    labelClassName?: string;
    checkboxBtnClassName?: string;
    register?: UseFormRegister<any>;
}
