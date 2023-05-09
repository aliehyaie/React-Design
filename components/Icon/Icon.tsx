import React from 'react';
import { IIcon } from './IIcon';
import { twMerge } from 'tailwind-merge';

const Icon: React.FC<IIcon> = ({ iconName, className = '', onClick }) => (
    <span
        onClick={onClick}
        className={twMerge(`text-sm ${iconName}`, className)}
    />
);

export default Icon;
