import type {Dispatch, SetStateAction} from "react";
import type { Dayjs } from 'dayjs';
import type { CalendarHeaderProps } from '../Header/props';

export interface CalendarBodyProps
    extends Pick<CalendarHeaderProps, 'isGregory' | 'setDate'> {
    numberOfMonths?: number;
    datesOfCurrentMonth: Dayjs[];
    date: Dayjs;
    dateRange: [Dayjs] | [Dayjs, Dayjs] | [];
    setDateRange: Dispatch<
        SetStateAction<[Dayjs] | [Dayjs, Dayjs] | []>
    >;
}
