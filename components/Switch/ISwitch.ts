import React from 'react';

export interface ISwitch extends React.HTMLProps<HTMLInputElement> {
    rounded?: boolean;
    className?: string;
    labelClassName?: string;
}
