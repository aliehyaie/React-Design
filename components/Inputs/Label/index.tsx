import Text from '../../Text';
import { twMerge } from 'tailwind-merge';
import type { FC } from 'react';
import type { LabelProps } from './props';

const Index: FC<LabelProps> = ({ error, label, labelClassName, required }) => {
    return (
        <Text
            className={twMerge(
                `inline-block self-start relative ${error && 'text-error'}`,
                labelClassName
            )}
        >
            {label || ''}
            {required && (
                <Text
                    variant='span'
                    className='absolute -left-2 -top-1 block h-1.5 w-1.5 rounded-full bg-error'
                />
            )}
        </Text>
    );
};

export default Index;
