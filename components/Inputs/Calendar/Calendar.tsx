import React, { FC, useEffect, useRef, useState } from 'react';
import Input from '../Input/Input';
import { IInput } from '../Input/IInput';
import useToggle from '../../../hooks/useToggle';
import { DateTimeUtils } from '../../../utils/dateTime';
import { getAllDates } from '../../../helper/calendar';
import { Dayjs } from 'dayjs';
import CalendarHeader from './Header/Header';
import CalendarBody from './Body';
import { If, Then } from '../../If/If';
import useOnClickOutside from '../../../hooks/useOnClickOutside';

interface IInputCalendar extends Omit<IInput, 'onChange'> {
    onChange: (date: Dayjs[]) => void;
}

// TODO: This component needs some improvements
//  1: Make the 'onChange' prop consistent with other inputs if possible
//  2: Add a single date picker feature
//  3: Add a multiple date picker feature
//  4: Debug the multi-month calendar
//  5: Make it responsive

const Calendar: FC<IInputCalendar> = props => {
    const [open, toggle] = useToggle(false);
    const calendarRef = useRef(null);
    useOnClickOutside(calendarRef, toggle);
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