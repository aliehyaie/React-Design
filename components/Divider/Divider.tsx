import React, { FC } from 'react';
import { IDividerProps } from './IDivider';

const Divider: FC<IDividerProps> = ({
    layout = 'horizontal',
    type = 'solid',
}) => {
    return (
        <span
            className={`${
                type === 'dashed'
                    ? 'border-dashed'
                    : type === 'dotted'
                    ? 'border-dotted'
                    : 'border-solid'
            } ${
                layout === 'horizontal'
                    ? 'my-4 border-b-4'
                    : 'mx-4 border-r-4 border-grey-3'
            }`}
        />
    );
};

export default Divider;
