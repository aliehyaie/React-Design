import React, { PropsWithChildren } from 'react';

const Container: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className='mx-auto max-w-[1440px] px-4 3xl:mr-28'>{children}</div>
    );
};

export default Container;
