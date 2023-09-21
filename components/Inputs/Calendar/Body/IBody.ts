import React from 'react';
import { Dayjs } from 'dayjs';
import { ICalendarHeaderProps } from '../Header/IHeader';

export interface ICalendarBodyProps
    extends Pick<ICalendarHeaderProps, 'isGregory' | 'setDate'> {
    numberOfMonths?: number;
    datesOfCurrentMonth: Dayjs[];
    date: Dayjs;
    dateRange: [Dayjs] | [Dayjs, Dayjs] | [];
    setDateRange: React.Dispatch<
        React.SetStateAction<[Dayjs] | [Dayjs, Dayjs] | []>
    >;
}
