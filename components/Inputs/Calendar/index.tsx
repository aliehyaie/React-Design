import {useEffect, useRef, useState, type FC} from 'react';
import Input from '../Input';
import CalendarHeader from './Header';
import { If, Then } from '../../If';
import CalendarBody from './Body';
import useToggle from '../../../hooks/useToggle';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
import { DateTimeUtils } from '../../../utils/dateTime';
import { getAllDates } from '../../../helper/calendar';
import type { InputProps } from '../Input/props';
import type { Dayjs } from 'dayjs';

interface IInputCalendar extends Omit<InputProps, 'onChange'> {
    onChange: (date: Dayjs[]) => void;
}

// TODO: This component needs some improvements
//  1: Make the 'onChange' prop consistent with other inputs if possible
//  2: Add a single date picker feature
//  3: Add a multiple date picker feature
//  4: Debug the multi-month calendar
//  5: Make it responsive

const Calendar: FC<IInputCalendar> = props => {
    const [open, toggle, setOpen] = useToggle(false);
    const calendarRef = useRef(null);
    useOnClickOutside(calendarRef, () => setOpen(false));
    const [isGregoryCalendar, isGregoryCalendarToggle] = useToggle(false);
    const dateTimeUtils = new DateTimeUtils(
        isGregoryCalendar ? 'gregory' : 'jalali',
        isGregoryCalendar ? 'en' : 'fa'
    );
    const [date, setDate] = useState(dateTimeUtils.getNow());
    const [dateRange, setDateRange] = useState<[Dayjs] | [Dayjs, Dayjs] | []>(
        []
    );
    const [datesOfCurrentMonth, setDatesOfCurrentMonth] = useState<
        Dayjs[] | []
    >([]);

    useEffect(() => {
        setDatesOfCurrentMonth(getAllDates(date));
    }, [date]);

    useEffect(() => {
        if (dateRange.length) props.onChange?.(dateRange);
    }, [dateRange]);

    return (
        <div ref={calendarRef} className='relative w-full'>
            <Input
                {...props}
                value={
                    dateRange.length
                        ? `${
                              dateRange?.[0] &&
                              dateTimeUtils.getFormattedDate(dateRange[0])
                          } ${
                              dateRange?.[1]
                                  ? ' - ' +
                                    dateTimeUtils.getFormattedDate(dateRange[1])
                                  : ''
                          }`
                        : ''
                }
                // TODO without this input component tells me onChange prop is incompatible it should be removed in the future
                onChange={() => undefined}
                onClick={toggle}
                readOnly
            />
            <If condition={open}>
                <Then>
                    <div className='absolute top-full right-0 z-50 w-full rounded-xl bg-white shadow-md'>
                        <CalendarHeader
                            calendarToggle={isGregoryCalendarToggle}
                            isGregory={isGregoryCalendar}
                            setDate={setDate}
                        />
                        <CalendarBody
                            numberOfMonths={2}
                            setDate={setDate}
                            isGregory={isGregoryCalendar}
                            datesOfCurrentMonth={datesOfCurrentMonth}
                            date={date}
                            dateRange={dateRange}
                            setDateRange={setDateRange}
                        />
                    </div>
                </Then>
            </If>
        </div>
    );
};

export default Calendar;
