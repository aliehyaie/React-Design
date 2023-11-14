import type { Dispatch, SetStateAction } from 'react';
import type { Dayjs } from 'dayjs';

export interface CalendarHeaderProps {
    date: Dayjs;
    setDate: Dispatch<SetStateAction<Dayjs>>;
}
