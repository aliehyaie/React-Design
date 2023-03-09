import React from 'react';

export interface ISingleRange {
    isSingle: true;
    value?: number;
}

export interface IMultiRange {
    isSingle: false;
    value?: [number, number];
}

export type IRange = {
    priceGap?: number;
    min?: number;
    max?: number;
    showIndicators?: boolean;
    step?: number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & (ISingleRange | IMultiRange);
