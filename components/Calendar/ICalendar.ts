import type { Dayjs } from 'dayjs';
export interface ICalendar {
    date?: Dayjs;
    events: {
        title: string;
        date: Dayjs | number;
    }[];
}
