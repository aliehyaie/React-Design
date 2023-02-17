import React from 'react';
import { IIcon } from '../Icon/IIcon';

export interface IInput extends React.HTMLProps<HTMLInputElement>, IIcon {
    className?: string;
    labelClassName?: string;
    iconRightName?: string;
    iconLeftName?: string;
    hasStroke?: boolean;
    hasFill?: boolean;
    width?: string | number;
}
