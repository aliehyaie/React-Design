import React, { PropsWithChildren } from 'react';
import { ICard } from './ICard';
import { twMerge } from 'tailwind-merge';
import Text from '../Text/Text';

const Card: React.FC<PropsWithChildren & ICard> = ({
    footer,
    header,
    subtitle,
    title,
    children,
    className,
}) => {
    return (
        <div
            className={twMerge(
                'bg-white rounded-xl max-w-xs shadow-lg',
                className
            )}
        >
            {header && <div className='mb-8'>{header}</div>}
            <div className='p-4'>
                {(title || subtitle) && (
                    <div>
                        {title && <Text variant='h4'>{title}</Text>}
                        {subtitle && <Text variant='h5'>{subtitle}</Text>}
                    </div>
                )}
                <div className='mt-8'>{children}</div>
                {footer && <div className='mt-8'>{footer}</div>}
            </div>
        </div>
    );
};

export default Card;
