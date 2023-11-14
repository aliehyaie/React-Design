import Icon from '../../Icon';
import Text from '../../Text';
import { DateTimeUtils } from '../../../utils/dateTime';
import type { FC } from 'react';
import type { CalendarHeaderProps } from './props';

const CalendarHeader: FC<CalendarHeaderProps> = ({ date, setDate }) => {
    const dateTimeUtils = new DateTimeUtils();
    const monthBeforeOrEqualToCurrentMonth = () =>
        date.month() <= dateTimeUtils.getNow().month();
    const next = () => {
        const nextMonthDate = dateTimeUtils.getNextMonthDate(date);
        setDate(nextMonthDate);
    };
    const prev = () => {
        if (monthBeforeOrEqualToCurrentMonth()) {
            return;
        }
        const prevMonthDate = dateTimeUtils.getPrevMonthDate(date);
        setDate(prevMonthDate);
    };

    return (
        <div className='mb-5 flex items-center justify-center'>
            <div className='flex items-center gap-2.5'>
                <div
                    onClick={next}
                    className={`flex h-6 w-6 items-center justify-center rounded-full bg-white
                     ${
                         monthBeforeOrEqualToCurrentMonth()
                             ? ''
                             : 'cursor-pointer'
                     }`}
                >
                    <Icon
                        className={`text-base ${
                            monthBeforeOrEqualToCurrentMonth()
                                ? 'text-disabled'
                                : ''
                        }`}
                        iconName='icon-arrow-right'
                    />
                </div>
                <div className='flex items-center gap-2.5'>
                    <Text className='text-sm'>
                        {dateTimeUtils.getFormattedDate(date, 'MMMM YYYY')}
                    </Text>
                </div>
                <div
                    onClick={prev}
                    className='flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-white text-center'
                >
                    <Icon className='text-base' iconName='icon-arrow-left' />
                </div>
            </div>
        </div>
    );
};

export default CalendarHeader;
