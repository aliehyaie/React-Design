import React from 'react';

export interface IIcon {
    iconName: string;
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLSpanElement>) => void;
}
