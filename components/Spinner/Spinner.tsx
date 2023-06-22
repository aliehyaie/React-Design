import React, { FC } from 'react';
import classes from './Spinner.module.scss';
import { ISpinner } from './ISpinner';

const Spinner: FC<ISpinner> = ({ className, type = 'line' }) => {
    return type === 'line' ? (
        <div className={`${classes.lineSpinner}`} />
    ) : (
        <div className={`${classes.spinner} ${className}`}>
            <svg viewBox='0 0 40 40'>
                <circle cx='20' cy='20' r='18' />
            </svg>
        </div>
    );
};

export default Spinner;
