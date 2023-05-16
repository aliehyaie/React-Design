import React from 'react';
import { IInputs } from '../IInputs';

export interface IInput extends React.HTMLProps<HTMLInputElement>, IInputs {
    iconRightName?: string;
    iconLeftName?: string;
}
