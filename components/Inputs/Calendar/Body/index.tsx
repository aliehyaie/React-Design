import React, { FC } from 'react';
import { DateTimeUtils } from '../../../../utils/dateTime';
import CalendarBodyDays from './Days';
import { getAllDates } from '../../../../helper/calendar';
import CalendarBodyHeader from './Header/Header';
import { ICalendarBodyProps } from './IBody';

const CalendarBody: FC<ICalendarBodyProps> = ({
    numberOfMonths = 1,
    setDate,
    date,
    isGregory,
    datesOfCurrentMonth,
    dateRange,
    setDateRange,
}) => {
    const dateTimeUtils = new DateTimeUtils(
        isGregory ? 'gregory' : 'jalali',
        isGregory ? 'en' : 'fa'
    );

    return (
        <div className='flex w-full gap-4 p-4'>
            {[...Array(numberOfMonths)].map((_, i) => {
                if (i === 0) {
                    return (
                        <div
                            key={date.toString()}
                            className='flex w-full flex-col gap-2'
                        >
                            <CalendarBodyHeader
                                setDate={setDate}
                                isGregory={isGregory}
                                date={date}
                                monthPosition={'first'}
                            />
                            <CalendarBodyDays
                                date={date}
                                isGregory={isGregory}
                                datesOfCurrentMonth={datesOfCurrentMonth}
                                dateRange={dateRange}
                                setDateRange={setDateRange}
                            />
                        </div>
                    );
                } else if (i === numberOfMonths - 1) {
                    const nextMonthDate = dateTimeUtils.getNextMonthDate(date);
                    return (
                        <div
                            key={nextMonthDate.toString()}
                            className='flex w-full flex-col gap-2'
                        >
                            <CalendarBodyHeader
                                setDate={setDate}
                                isGregory={isGregory}
                                date={nextMonthDate}
                                monthPosition={'last'}
                            />
                            <CalendarBodyDays
                                isGregory={isGregory}
                                datesOfCurrentMonth={getAllDates(nextMonthDate)}
                                date={dateTimeUtils.getNextMonthDate(date)}
                                dateRange={dateRange}
                                setDateRange={setDateRange}
                            />
                        </div>
                    );
                } else {
                    return <></>;
                }
            })}
            {/* */}
        </div>
    );
};

export default CalendarBody;
