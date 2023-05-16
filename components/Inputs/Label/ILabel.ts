import { IInputs } from '../IInputs';

export type ILabel = Pick<
    IInputs,
    'label' | 'error' | 'labelClassName' | 'required'
>;
