import type { InputsProps } from '../props';
import type { StateManagerProps } from 'react-select/dist/declarations/src/useStateManager';

export type SelectProps = Pick<
    InputsProps,
    | 'label'
    | 'required'
    | 'error'
    | 'errorMessage'
    | 'className'
    | 'labelClassName'
> &
    StateManagerProps;
