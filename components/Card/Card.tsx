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
                'bg-white rounded-xl max-w-xs shadow-lg overflow-auto leading-[normal] flex flex-col gap-2',
                className
            )}
        >
            {header && <div>{header}</div>}
            <div className='p-4'>
                {(title || subtitle) && (
                    <div>
                        {title && <Text variant='h4'>{title}</Text>}
                        {subtitle && <Text variant='h5'>{subtitle}</Text>}
                    </div>
                )}
                <div className='mt-8'>{children}</div>
            </div>
            {footer && <div>{footer}</div>}
        </div>
    );
};

export default Card;
