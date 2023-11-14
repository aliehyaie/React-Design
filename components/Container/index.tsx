import type { FC, PropsWithChildren } from 'react';

const Container: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className='mx-auto max-w-[1440px] px-4 3xl:mr-28'>{children}</div>
    );
};

export default Container;
