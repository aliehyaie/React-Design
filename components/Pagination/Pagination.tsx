import React from 'react';
import { usePagination, DOTS } from '../../hooks/usePagination/usePagination';
import classes from './Pagination.module.scss';
import { IPagination } from './IPagination';
import Icon from '../Icon/Icon';

const Pagination: React.FC<IPagination> = ({
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize = 10,
    className,
}) => {
    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize,
    });

    // If there are less than 2 times in pagination range we shall not render the component
    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    const lastPage = paginationRange[paginationRange.length - 1];
    return (
        <ul className={`${classes.paginationContainer} ${className}`}>
            {/* Left navigation arrow */}
            <li
                className={`${classes.paginationItem} ${
                    currentPage === 1 ? classes.disabled : ''
                }`}
                onClick={onPrevious}
            >
                <Icon iconName='icon-arrow-ios-forward' />
            </li>
            {paginationRange.map((pageNumber, i) => {
                // If the pageItem is a DOT, render the DOTS unicode character
                if (pageNumber === DOTS) {
                    return (
                        <li
                            key={i}
                            className={`${classes.paginationItem} ${classes.dots}`}
                        >
                            &#8230;
                        </li>
                    );
                }

                // Render our Page Pills
                return (
                    <li
                        key={i}
                        className={`${classes.paginationItem} ${
                            pageNumber === currentPage ? classes.selected : ''
                        }`}
                        onClick={() => onPageChange(+pageNumber)}
                    >
                        {pageNumber}
                    </li>
                );
            })}
            {/*  Right Navigation arrow */}
            <li
                className={`${classes.paginationItem} ${
                    currentPage === lastPage ? classes.disabled : ''
                }`}
                onClick={onNext}
            >
                <Icon iconName='icon-arrow-ios-back' />
            </li>
        </ul>
    );
};

export default Pagination;
