import { ReactElement } from 'react';

export interface ITabs {
    tabsData: {
        header: string | ReactElement;
        body: ReactElement | string;
        query?: string;
    }[];
    activeTabIndex?: number;
}
