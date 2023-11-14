import Text from '../../../Text';
import Icon from "../../../Icon";
import { If, Then, Else } from '../../../If';
import { DateTimeUtils } from '../../../../utils/dateTime';
import type { FC } from 'react';
import type { CalendarHeaderProps } from './props';

const CalendarHeader: FC<CalendarHeaderProps> = ({
                                                     calendarToggle,
                                                     setDate,
                                                     isGregory,
                                                 }) => {
    const dateTimeUtils = new DateTimeUtils(
        isGregory ? 'gregory' : 'jalali',
        isGregory ? 'en' : 'fa'
    );
    return (
        <div className='flex justify-between border-b border-warning  p-4 pb-2'>
            <div
                onClick={() => {
                    setDate(dateTimeUtils.getNow());
                }}
            >
                <Text className='cursor-pointer'>برو به امروز</Text>
            </div>
            <div onClick={calendarToggle} className='flex items-center gap-2'>
                <Icon iconName='icon-calendar' />
                <If condition={calendarToggle}>
                    <Then>
                        <Text>تقویم شمسی</Text>
                    </Then>
                    <Else>
                        <Text>تقویم میلادی</Text>
                    </Else>
                </If>
            </div>
        </div>
    );
};

export default CalendarHeader;
