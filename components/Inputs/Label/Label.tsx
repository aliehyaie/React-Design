import React, { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import Text from '../../Text/Text';
import { ILabel } from './ILabel';

const Label: FC<ILabel> = ({ error, label, labelClassName, required }) => {
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
                    className='absolute -top-1 -left-2 block h-1.5 w-1.5 rounded-full bg-error'
                />
            )}
        </Text>
    );
};

export default Label;
