import React, { FC, useEffect, useState } from 'react';
import { Dayjs } from 'dayjs';
import Text from '../Text/Text';
import { DateTimeUtils } from '../../utils/DateTime/DateTime';
import { getAllDates } from '../../helper/Calendar';
import { ICalendar } from './ICalendar';

const CalendarCells: FC<Required<Pick<ICalendar, 'date' | 'events'>>> = ({
    date,
    events,
}) => {
    const dateTimeUtils = new DateTimeUtils();
    const [datesOfCurrentMonth, setDatesOfCurrentMonth] = useState<
        Dayjs[] | []
    >([]);

    const getFormattedDateObject = (date: Dayjs) => ({
        day: date.date(),
        gDay: date.calendar('gregory').date(),
        month: date.month(),
        year: date.year(),
        dayOfWeek: date.weekday(),
        event: events.find(event => date.isSame(event.date, 'day')),
        isHoliday: dateTimeUtils.checkIsHoliday(date),
        isCurrentMonth: date.month() === dateTimeUtils.getNow().month(),
        isToday: dateTimeUtils.checkIsToday(date),
    });

    useEffect(() => {
        setDatesOfCurrentMonth(getAllDates(date));
    }, [date]);

    return (
        <>
            {datesOfCurrentMonth.map(date => {
                const formattedDay = getFormattedDateObject(date);
                return (
                    <div
                        className={`relative  p-1 ${
                            formattedDay.isCurrentMonth
                                ? 'bg-white'
                                : 'bg-grey-9'
                        }`}
                        key={`${formattedDay.month} ${formattedDay.day}`}
                    >
                        <div className='relative h-full'>
                            <div className='absolute top-0 flex'>
                                <Text
                                    className={`font-mono ${
                                        formattedDay.isCurrentMonth
                                            ? ''
                                            : 'text-disabled'
                                    } ${
                                        formattedDay.isHoliday
                                            ? 'text-error'
                                            : ''
                                    }`}
                                >{`${formattedDay.gDay}/`}</Text>
                                <Text
                                    className={`font-mono ${
                                        formattedDay.isCurrentMonth
                                            ? ''
                                            : 'text-disabled'
                                    } ${
                                        formattedDay.isHoliday
                                            ? 'text-error'
                                            : ''
                                    }`}
                                >
                                    {formattedDay.day}
                                </Text>
                            </div>
                            {formattedDay.event ? (
                                <>
                                    <div
                                        className={
                                            'absolute bottom-0 z-10 w-full rounded-full bg-info-bg pr-2.5'
                                        }
                                    >
                                        <Text className='py-0.5 text-xs text-info'>
                                            {formattedDay.event.title}:
                                            {dateTimeUtils.getFormattedDate(
                                                'HH:mm',
                                                formattedDay.event.date
                                            )}
                                        </Text>
                                    </div>
                                </>
                            ) : null}
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default CalendarCells;
