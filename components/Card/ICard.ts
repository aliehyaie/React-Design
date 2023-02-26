import React from 'react';

export interface ICard {
    title?: string;
    subtitle?: string;
    header?: React.ReactElement;
    footer?: React.ReactElement;
    className?: string;
}
