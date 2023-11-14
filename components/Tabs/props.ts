import type { ReactElement } from 'react';

export interface TabProps {
    tabsData: {
        header: string | ReactElement;
        body: ReactElement | string;
        query?: string;
    }[];
    activeTabIndex?: number;
}
