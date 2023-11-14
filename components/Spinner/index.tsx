import classes from './styles.module.scss';
import type { FC } from 'react';
import type {SpinnerProps} from './props';

const Spinner: FC<SpinnerProps> = ({ className, type = 'line' }) => {
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
