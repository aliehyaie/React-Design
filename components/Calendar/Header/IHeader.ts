import type { Dayjs } from 'dayjs';
import type { Dispatch, SetStateAction } from 'react';

export interface IHeader {
    date: Dayjs;
    setDate: Dispatch<SetStateAction<Dayjs>>;
}
