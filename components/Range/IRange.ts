import React from 'react';

export interface ISingleRange {
    isSingle?: true;
    value?: number;
}

export interface IMultiRange {
    isSingle?: false;
    value?: [number, number];
}

export type IRange = {
    priceGap?: number;
} & React.HTMLProps<HTMLInputElement> &
    (ISingleRange | IMultiRange);
