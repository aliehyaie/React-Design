import { DateTimeUtils } from '../utils/dateTime';
import type { Dayjs } from 'dayjs';

const dateTimeUtils = new DateTimeUtils();

export const getAllDates = (date: Dayjs) => {
    let firstDateOfCurrentMonth = dateTimeUtils.getSpecificDateOfMonth(date, 0);
    const nextMonth = date.add(1, 'month').month();
    const allDates = [];
    while (firstDateOfCurrentMonth.weekday(0).month() !== nextMonth) {
        allDates.push(firstDateOfCurrentMonth);
        firstDateOfCurrentMonth = firstDateOfCurrentMonth.add(1, 'day');
    }
    return allDates;
};
