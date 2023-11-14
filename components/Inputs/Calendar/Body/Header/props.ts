import type { CalendarBodyProps } from '../props';

export interface CalendarBodyHeaderProps
    extends Pick<CalendarBodyProps, 'date' | 'setDate' | 'isGregory'> {
    monthPosition?: 'first' | 'last' | 'middle';
}
