import { useState } from 'react';
import { DateTimeUtils } from '../../utils/DateTime/DateTime';
import CalendarHeader from './Header/Header';
import CalendarDays from './Days';
import CalendarCells from './Cells';
import { ICalendar } from './ICalendar';
import type { FC } from 'react';

const Calendar: FC<ICalendar> = ({ date, events }) => {
    const dateTimeUtils = new DateTimeUtils();
    const [currentDate, setCurrentDate] = useState(dateTimeUtils.getDate(date));

    return (
        <div className='w-[700px] rounded-2xl bg-grey-1 p-4'>
            <CalendarHeader date={currentDate} setDate={setCurrentDate} />
            <div>
                <div className='w-full rounded-lg'>
                    <div
                        className='grid auto-rows-[100px]
                    grid-cols-7
                    grid-rows-[24px]
                    gap-1.5
                    overflow-x-hidden
                    '
                    >
                        <CalendarDays />
                        <CalendarCells events={events} date={currentDate} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calendar;
