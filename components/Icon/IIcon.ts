import React from 'react';

export interface IIcon {
    iconName: string;
    size?: number;
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLSpanElement>) => void;
}
