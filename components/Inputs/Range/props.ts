import type {InputsProps} from "../props";

export interface SingleRangeInterface {
    isSingle: true;
    value?: number;
    onChange: (value: number) => void;
}

export interface MultiRangePropsInterface {
    isSingle: false;
    value?: [number, number];
    onChange: (values: [number, number]) => void;
}

export type RangeProps = {
    priceGap?: number;
    min?: number;
    max?: number;
    showIndicators?: boolean;
    step?: number;
} & Omit<InputsProps, 'value' | 'onChange'> &
    (SingleRangeInterface | MultiRangePropsInterface);
