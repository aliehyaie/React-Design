import dayjs, { Dayjs } from 'dayjs';
import jalaliDay from 'jalaliday';
import weekdayPlugin from 'dayjs/plugin/weekday';
import isTodayPlugin from 'dayjs/plugin/isToday';

dayjs.extend(jalaliDay);
dayjs.extend(weekdayPlugin);
dayjs.extend(isTodayPlugin);

type DateTimeOptionsType = {
    calendar?: 'gregory' | 'jalali';
    local?: string;
    dayIndex?: number;
    format?: string;
    date?: Dayjs | number;
};

export class DateTimeUtils {
    constructor(
        private calendar: DateTimeOptionsType['calendar'] = 'jalali',
        private local: DateTimeOptionsType['local'] = 'fa'
    ) {}

    private getDayjsInstance(date?: DateTimeOptionsType['date']) {
        return dayjs(date).calendar(this.calendar!).locale(this.local!);
    }

    getFormattedDate(
        format: DateTimeOptionsType['format'],
        date?: DateTimeOptionsType['date']
    ) {
        return this.getDayjsInstance(date).format(format);
    }

    getNow() {
        return this.getDayjsInstance();
    }

    getDate(date: DateTimeOptionsType['date']) {
        return this.getDayjsInstance(date);
    }

    checkIsHoliday(date: DateTimeOptionsType['date']) {
        return this.getDayjsInstance(date).weekday() === 6;
    }

    checkIsToday(date: NonNullable<DateTimeOptionsType['date']>) {
        return dayjs(date).isToday();
    }

    getDayName(dayIndex = 0, format = 'dddd') {
        return this.getDayjsInstance().weekday(dayIndex).format(format);
    }

    getSpecificDateOfMonth(date: DateTimeOptionsType['date'], dayIndex = 0) {
        return this.getDayjsInstance(date).startOf('month').weekday(dayIndex);
    }

    getNextMonthDate(date?: DateTimeOptionsType['date']) {
        return this.getDayjsInstance(date).add(1, 'month');
    }

    getPrevMonthDate(date?: DateTimeOptionsType['date']) {
        return this.getDayjsInstance(date).subtract(1, 'month');
    }
}
