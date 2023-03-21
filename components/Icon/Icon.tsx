import React from 'react';
import { IIcon } from './IIcon';

const Icon: React.FC<IIcon> = ({ iconName, className, onClick }) => (
    <span onClick={onClick} className={`text-sm ${iconName} ${className}`} />
);

export default Icon;
