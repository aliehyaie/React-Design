import React from 'react';
import { UseFormRegister } from 'react-hook-form';

export interface IRadio extends React.HTMLProps<HTMLInputElement> {
    className?: string;
    labelClassName?: string;
    register?: UseFormRegister<any>;
}
