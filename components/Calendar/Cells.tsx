import React, { FC, useEffect, useState } from 'react';
import { Dayjs } from 'dayjs';
import Text from '../Text/Text';
import { DateTimeUtils } from '../../utils/dateTime';
import { getAllDates, getFormattedDateObject } from '../../helper/calendar';
import { ICalendar } from './ICalendar';

const CalendarCells: FC<Required<Pick<ICalendar, 'date' | 'events'>>> = ({
    date,
    events,
}) => {
    const dateTimeUtils = new DateTimeUtils();
    const [datesOfCurrentMonth, setDatesOfCurrentMonth] = useState<
        Dayjs[] | []
    >([]);

    useEffect(() => {
        setDatesOfCurrentMonth(getAllDates(date));
    }, [date]);

    return (
        <>
            {datesOfCurrentMonth.map(date => {
                const formattedDate: ReturnType<
                    typeof getFormattedDateObject
                > & { event?: ICalendar['events'][0] } =
                    getFormattedDateObject(date);
                formattedDate.event = events.find(event =>
                    date.isSame(event.date, 'day')
                );

                return (
                    <div
                        className={`relative  p-1 ${
                            formattedDate.isCurrentMonth
                                ? 'bg-white'
                                : 'bg-grey-9'
                        }`}
                        key={`${formattedDate.month} ${formattedDate.day}`}
                    >
                        <div className='relative h-full'>
                            <div className='absolute top-0 flex'>
                                <Text
                                    className={`font-mono ${
                                        formattedDate.isCurrentMonth
                                            ? ''
                                            : 'text-disabled'
                                    } ${
                                        formattedDate.isHoliday
                                            ? 'text-error'
                                            : ''
                                    }`}
                                >{`${formattedDate.gDay}/`}</Text>
                                <Text
                                    className={`font-mono ${
                                        formattedDate.isCurrentMonth
                                            ? ''
                                            : 'text-disabled'
                                    } ${
                                        formattedDate.isHoliday
                                            ? 'text-error'
                                            : ''
                                    }`}
                                >
                                    {formattedDate.day}
                                </Text>
                            </div>
                            {formattedDate.event ? (
                                <>
                                    <div
                                        className={
                                            'absolute bottom-0 z-10 w-full rounded-full bg-info-bg pr-2.5'
                                        }
                                    >
                                        <Text className='py-0.5 text-xs text-info'>
                                            {formattedDate.event.title}:
                                            {dateTimeUtils.getFormattedDate(
                                                formattedDate.event.date,
                                                'HH:mm'
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
