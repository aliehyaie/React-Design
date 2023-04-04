import React from 'react';
import { UseFormRegister } from 'react-hook-form';

export interface IInput extends React.HTMLProps<HTMLInputElement> {
    className?: string;
    labelClassName?: string;
    iconRightName?: string;
    iconLeftName?: string;
    hasStroke?: boolean;
    hasFill?: boolean;
    width?: string | number;
    register?: UseFormRegister<any>;
}
