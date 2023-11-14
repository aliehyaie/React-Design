import Text from '../Text';
import { twMerge } from 'tailwind-merge';
import type { FC, PropsWithChildren } from 'react';
import type {CardProps} from './props';

const Card: FC<PropsWithChildren & CardProps> = ({
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
