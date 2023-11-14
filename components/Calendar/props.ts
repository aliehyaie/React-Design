import type { Dayjs } from 'dayjs';
export interface CalendarProps {
    date?: Dayjs;
    events: {
        title: string;
        date: Dayjs | number;
    }[];
}
