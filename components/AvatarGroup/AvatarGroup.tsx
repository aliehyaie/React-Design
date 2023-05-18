import React, { PropsWithChildren } from 'react';

const AvatarGroup: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className='[&>*]:content-box flex [&>*]:-ml-2 [&>*]:border-2 [&>*]:border-inherit'>
            {children}
        </div>
    );
};

export default AvatarGroup;
