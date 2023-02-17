import React from 'react';
import { IIcon } from './IIcon';

const Icon: React.FC<IIcon> = ({ iconName, className, size }) => (
    <span style={{ fontSize: size }} className={`${iconName} ${className}`} />
);

Icon.defaultProps = {
    size: 14,
};

export default Icon;
