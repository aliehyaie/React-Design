import React, { type FC } from 'react';
import Text from '../../../Text/Text';
import { getFormattedDateObject } from '../../../../helper/calendar';
import { If, Then } from '../../../If/If';
import { DateTimeUtils } from '../../../../utils/dateTime';
import { ICalendarBodyProps } from './IBody';

const CalendarBodyDays: FC<
    Pick<
        ICalendarBodyProps,
        | 'isGregory'
        | 'datesOfCurrentMonth'
        | 'dateRange'
        | 'setDateRange'
        | 'date'
    >
> = ({ isGregory, datesOfCurrentMonth, dateRange, setDateRange, date }) => {
    const dateTimeUtils = new DateTimeUtils(
        isGregory ? 'gregory' : 'jalali',
        isGregory ? 'en' : 'fa'
    );

    return (
        <div className='grid grid-cols-7 justify-center justify-items-center gap-y-0.5'>
            {dateTimeUtils.getDaysNameOfWeek('dd').map(dayOfWeek => (
                <Text key={dayOfWeek} className='mb-2 text-xs text-disabled'>
                    {dayOfWeek}
                </Text>
            ))}
            {datesOfCurrentMonth.map(dateOfCurrentMonth => {
                const formattedDate =
                    getFormattedDateObject(dateOfCurrentMonth);
                return (
                    <div
                        onClick={() => {
                            if (
                                formattedDate.hasPassed ||
                                formattedDate.month !== date.month()
                            )
                                return;
                            if (!dateRange.length || dateRange.length === 2) {
                                setDateRange([dateOfCurrentMonth]);
                            } else {
                                if (
                                    dateTimeUtils.isBefore(
                                        dateOfCurrentMonth,
                                        dateRange[0]
                                    )
                                ) {
                                    setDateRange([dateOfCurrentMonth]);
                                } else {
                                    setDateRange([
                                        ...dateRange,
                                        dateOfCurrentMonth,
                                    ]);
                                }
                            }
                        }}
                        key={dateOfCurrentMonth.toString()}
                        className={`justify-self-stretch p-1.5 text-center
                                            ${
                                                formattedDate.isToday &&
                                                dateRange?.[0] !==
                                                    dateOfCurrentMonth
                                                    ? 'rounded-md border border-warning'
                                                    : ''
                                            }
                                         ${
                                             dateTimeUtils.isSame(
                                                 dateOfCurrentMonth,
                                                 dateRange?.[0]
                                             ) &&
                                             formattedDate.month ===
                                                 date.month()
                                                 ? 'rounded-r-sm bg-warning'
                                                 : dateTimeUtils.isSame(
                                                       dateOfCurrentMonth,
                                                       dateRange?.[1]
                                                   ) &&
                                                   formattedDate.month ===
                                                       date.month()
                                                 ? 'rounded-l-sm bg-warning'
                                                 : ''
                                         }
                                         ${
                                             dateRange.length === 2 &&
                                             dateTimeUtils.isBetween(
                                                 dateOfCurrentMonth,
                                                 dateRange?.[0],
                                                 dateRange?.[1]
                                             ) &&
                                             formattedDate.month ===
                                                 date.month()
                                                 ? 'bg-warning-bg'
                                                 : ''
                                         }
                                         `}
                    >
                        <If condition={formattedDate.month === date.month()}>
                            <Then>
                                <Text
                                    key={dateOfCurrentMonth.toString()}
                                    className={`relative text-xs font-medium ${
                                        formattedDate.hasPassed
                                            ? 'text-disabled font-normal ' +
                                              'before:w-full before:h-px before:bg-disabled before:block before:-rotate-45 before:origin-right before:absolute'
                                            : formattedDate.isHoliday
                                            ? 'text-error'
                                            : ''
                                    }`}
                                >
                                    {formattedDate.day}
                                </Text>
                            </Then>
                        </If>
                    </div>
                );
            })}
        </div>
    );
};

export default CalendarBodyDays;
