import type { Dispatch, SetStateAction } from 'react';
import type { Dayjs } from 'dayjs';

export interface CalendarHeaderProps {
    calendarToggle: () => void;
    isGregory: boolean;
    setDate: Dispatch<SetStateAction<Dayjs>>;
}
