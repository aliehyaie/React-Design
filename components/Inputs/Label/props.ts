import { InputsProps } from '../props';

export type LabelProps = Pick<
    InputsProps,
    'label' | 'error' | 'labelClassName' | 'required'
>;
