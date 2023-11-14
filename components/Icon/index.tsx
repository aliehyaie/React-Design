import { twMerge } from 'tailwind-merge';
import type { FC } from 'react';
import type {IconProps} from './props';

const Icon: FC<IconProps> = ({ iconName, className = '', onClick }) => (
    <span
        onClick={onClick}
        className={twMerge(`text-sm ${iconName}`, className)}
    />
);

export default Icon;
