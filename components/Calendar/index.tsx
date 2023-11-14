import { useState } from 'react';
import CalendarHeader from './Header';
import CalendarDays from './Days';
import CalendarCells from './Cells';
import { DateTimeUtils } from '../../utils/dateTime';
import type { CalendarProps } from './props';
import type { FC } from 'react';

const Calendar: FC<CalendarProps> = ({ date, events }) => {
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
