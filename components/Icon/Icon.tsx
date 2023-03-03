import React from 'react';
import { IIcon } from './IIcon';

const Icon: React.FC<IIcon> = ({ iconName, className, size, onClick }) => (
    <span
        onClick={onClick}
        style={{ fontSize: size }}
        className={`text-sm ${iconName} ${className}`}
    />
);

export default Icon;
