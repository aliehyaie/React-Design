import dayjs, { Dayjs, OpUnitType } from 'dayjs';
import jalaliDay from 'jalaliday';
import weekdayPlugin from 'dayjs/plugin/weekday';
import isTodayPlugin from 'dayjs/plugin/isToday';
import isBetween from 'dayjs/plugin/isBetween';

dayjs.extend(jalaliDay);
dayjs.extend(weekdayPlugin);
dayjs.extend(isTodayPlugin);
dayjs.extend(isBetween);

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
        date?: DateTimeOptionsType['date'],
        format: DateTimeOptionsType['format'] = 'YYYY/MM/DD'
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
        return dayjs(date).calendar('gregory').locale('en').isToday();
    }

    getDaysNameOfWeek(format = 'dddd') {
        return [...Array(7)].map((_, i) => this.getDayName(i, format));
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

    isSame(
        firstDate: DateTimeOptionsType['date'],
        secondDate: DateTimeOptionsType['date']
    ) {
        return this.getDayjsInstance(firstDate).isSame(
            this.getDayjsInstance(secondDate)
        );
    }

    isBefore(
        firstDate: DateTimeOptionsType['date'],
        secondDate: DateTimeOptionsType['date'],
        unit: OpUnitType = 'date'
    ) {
        return this.getDayjsInstance(firstDate).isBefore(
            this.getDayjsInstance(secondDate),
            unit
        );
    }

    isAfter(
        firstDate: DateTimeOptionsType['date'],
        secondDate: DateTimeOptionsType['date']
    ) {
        return this.getDayjsInstance(firstDate).isAfter(
            this.getDayjsInstance(secondDate)
        );
    }

    isBetween(
        date: DateTimeOptionsType['date'],
        minDate: DateTimeOptionsType['date'],
        maxDate: DateTimeOptionsType['date']
    ) {
        return this.getDayjsInstance(date).isBetween(
            this.getDayjsInstance(minDate),
            this.getDayjsInstance(maxDate)
        );
    }
}
