import Text from '../../../../Text';
import Icon from "../../../../Icon";
import { If, Then } from '../../../../If';
import { DateTimeUtils } from '../../../../../utils/dateTime';
import type { FC } from 'react';
import type {CalendarBodyHeaderProps} from './props';

const CalendarBodyHeader: FC<CalendarBodyHeaderProps> = ({
    setDate,
    date,
    isGregory,
    monthPosition = 'middle',
}) => {
    const dateTimeUtils = new DateTimeUtils(
        isGregory ? 'gregory' : 'jalali',
        isGregory ? 'en' : 'fa'
    );

    const monthBeforeOrEqualToCurrentMonth = () =>
        date.month() <= dateTimeUtils.getNow().month();

    const next = () => {
        setDate(date);
    };

    const prev = () => {
        if (monthBeforeOrEqualToCurrentMonth()) {
            return;
        }
        const prevMonthDate = dateTimeUtils.getPrevMonthDate(date);
        setDate(prevMonthDate);
    };

    return (
        <div className='flex items-center gap-1'>
            <If condition={monthPosition === 'first'}>
                <Then>
                    <Icon
                        iconName='icon-chevron-right'
                        className='cursor-pointer text-xl font-bold text-warning'
                        onClick={prev}
                    />
                </Then>
            </If>
            <Text className='w-full text-center font-bold'>
                {date.format('MMMM')}
            </Text>
            <If condition={monthPosition === 'last'}>
                <Then>
                    <Icon
                        iconName='icon-chevron-left'
                        className='cursor-pointer text-xl font-bold text-warning'
                        onClick={next}
                    />
                </Then>
            </If>
        </div>
    );
};

export default CalendarBodyHeader;
