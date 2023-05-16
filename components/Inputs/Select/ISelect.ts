import { IInputs } from '../IInputs';
import { StateManagerProps } from 'react-select/dist/declarations/src/useStateManager';

export type ISelect = Pick<
    IInputs,
    | 'label'
    | 'required'
    | 'error'
    | 'errorMessage'
    | 'className'
    | 'labelClassName'
> &
    StateManagerProps;
