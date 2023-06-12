import React, { FC } from 'react';
import classes from './Loader.module.scss';
import { twMerge } from 'tailwind-merge';
import { ILoader } from './ILoader';

const Loader: FC<ILoader> = ({ className }) => {
    return <div className={twMerge(classes.dotFlashing, className)} />;
};

export default Loader;
