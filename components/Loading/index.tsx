import { twMerge } from 'tailwind-merge';
import classes from './styles.module.scss';
import type { FC } from 'react';
import type { LoadingProps } from './props';

const Loading: FC<LoadingProps> = ({ className }) => <div className={twMerge(classes.dotFlashing, className)} />;

export default Loading;
