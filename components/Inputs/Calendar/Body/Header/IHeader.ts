import { ICalendarBodyProps } from '../IBody';

export interface ICalendarBodyHeaderProps
    extends Pick<ICalendarBodyProps, 'date' | 'setDate' | 'isGregory'> {
    monthPosition?: 'first' | 'last' | 'middle';
}
