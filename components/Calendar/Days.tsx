import React from 'react';
import { DateTimeUtils } from '../../utils/DateTime/DateTime';
import Text from '../Text/Text';

const CalendarDays = () => {
    const dateTimeUtils = new DateTimeUtils();
    return (
        <>
            {[...Array(7)].map((_, i) => (
                <div
                    key={Math.random()}
                    className='-mb-2.5 flex items-center justify-center bg-white text-xs text-grey-7 first:rounded-tr-xl [&:nth-child(7)]:rounded-tl-xl'
                >
                    <Text className='text-grey-7'>
                        {dateTimeUtils.getDayName(i)}
                    </Text>
                </div>
            ))}
        </>
    );
};

export default CalendarDays;
