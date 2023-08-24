import Text from '../Text/Text';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import type { BreadcrumbsProps } from './IBreadcrumb';
import type { FC } from 'react';

const Breadcrumbs: FC<BreadcrumbsProps> = ({
    breadCrumbs,
    separator = 'icon-chevron-right',
    className = '',
}) => (
    <div className={`flex items-center gap-0.5 ${className}`}>
        {breadCrumbs.map((breadCrumb, index) => {
            if (breadCrumbs.length - 1 === index)
                return (
                    <Text className='font-bold' color='primary'>
                        {breadCrumb.label}
                    </Text>
                );
            return (
                <div
                    key={breadCrumb.label}
                    className='flex items-center gap-0.5'
                >
                    <Button
                        isLink
                        href={breadCrumb.url}
                        type='button'
                        variant='text'
                        label={breadCrumb.label}
                    />
                    <Icon
                        className='mt-1 text-lg text-grey-3'
                        iconName={separator!}
                    />
                </div>
            );
        })}
    </div>
);

export default Breadcrumbs;
