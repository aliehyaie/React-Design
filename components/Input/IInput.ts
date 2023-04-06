import React from 'react';

export interface IInput extends React.HTMLProps<HTMLInputElement> {
    className?: string;
    labelClassName?: string;
    iconRightName?: string;
    iconLeftName?: string;
    hasStroke?: boolean;
    hasFill?: boolean;
    width?: string | number;
}
