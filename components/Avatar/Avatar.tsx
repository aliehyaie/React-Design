import React, { useState } from 'react';
import { IAvatar } from './IAvatar';
import Icon from '../Icon/Icon';
import Image from 'next/image';
import Text from '../Text/Text';
import { twMerge } from 'tailwind-merge';

const Avatar: React.FC<IAvatar> = ({
    variant = 'circle',
    imgSrc,
    label,
    alt,
    iconName = 'icon-person',
    className = '',
}) => {
    const [showFallback, setShowFallback] = useState(false);
    return (
        <div
            className={`${twMerge(
                'relative flex h-16 w-16 items-center justify-center overflow-hidden bg-grey-2 text-white',
                className
            )} ${variant === 'circle' ? 'rounded-full' : 'rounded-sm'}`}
        >
            {imgSrc && !showFallback ? (
                <Image
                    src={imgSrc}
                    onError={() => setShowFallback(true)}
                    fill
                    style={{ objectFit: 'cover' }}
                    alt={alt || 'avatar image'}
                />
            ) : label ? (
                <Text variant='span' className='text-2xl text-inherit'>
                    {label}
                </Text>
            ) : (
                <Icon className='text-2xl text-inherit' iconName={iconName} />
            )}
        </div>
    );
};

export default Avatar;
