import React, { FC } from 'react';
import classes from './Loader.module.scss';
import { twMerge } from 'tailwind-merge';
import { ILoading } from './ILoading';

const Loading: FC<ILoading> = ({ className }) => {
    return <div className={twMerge(classes.dotFlashing, className)} />;
};

export default Loading;
