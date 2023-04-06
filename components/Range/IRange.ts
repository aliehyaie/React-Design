import React from 'react';

export interface ISingleRange {
    isSingle: true;
    value?: number;
    onChange: (value: number) => void;
}

export interface IMultiRange {
    isSingle: false;
    value?: [number, number];
    onChange: (values: [number, number]) => void;
}

export type IRange = {
    priceGap?: number;
    min?: number;
    max?: number;
    showIndicators?: boolean;
    step?: number;
} & Omit<React.HTMLProps<HTMLInputElement>, 'value' | 'onChange'> &
    (ISingleRange | IMultiRange);
