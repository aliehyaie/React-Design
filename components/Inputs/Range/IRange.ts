import { IInputs } from '../IInputs';

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
} & Omit<IInputs, 'value' | 'onChange'> &
    (ISingleRange | IMultiRange);
