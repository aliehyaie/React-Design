import { Dispatch, SetStateAction } from 'react';
import { Dayjs } from 'dayjs';

export interface ICalendarHeaderProps {
    calendarToggle: () => void;
    isGregory: boolean;
    setDate: Dispatch<SetStateAction<Dayjs>>;
}
