import React, { FC } from 'react';
import Text from '../../../Text/Text';
import Icon from '../../../Icon/Icon';
import { Else, If, Then } from '../../../If/If';
import { ICalendarHeaderProps } from './IHeader';
import { DateTimeUtils } from '../../../../utils/dateTime';

const CalendarHeader: FC<ICalendarHeaderProps> = ({
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
