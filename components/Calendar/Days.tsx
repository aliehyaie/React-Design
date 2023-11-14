import Text from '../Text';
import { DateTimeUtils } from '../../utils/dateTime';

const CalendarDays = () => {
    const dateTimeUtils = new DateTimeUtils();
    return (
        <>
            {dateTimeUtils.getDaysNameOfWeek().map(day => (
                <div
                    key={Math.random()}
                    className='-mb-2.5 flex items-center justify-center bg-white text-xs text-grey-7 first:rounded-tr-xl [&:nth-child(7)]:rounded-tl-xl'
                >
                    <Text className='text-grey-7'>{day}</Text>
                </div>
            ))}
        </>
    );
};

export default CalendarDays;
