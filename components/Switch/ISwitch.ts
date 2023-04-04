import React from 'react';
import { UseFormRegister } from 'react-hook-form';

export interface ISwitch extends React.HTMLProps<HTMLInputElement> {
    rounded?: boolean;
    className?: string;
    labelClassName?: string;
    register?: UseFormRegister<any>;
}
