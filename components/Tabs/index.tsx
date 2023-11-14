import Link from 'next/link';
import { useRouter } from 'next/router';
import {useEffect, useState, type FC } from 'react';
import type { TabProps } from './props';

const Tabs: FC<TabProps> = ({ tabsData, activeTabIndex = 1 }) => {
    const [activeTab, setActiveTab] = useState(activeTabIndex);
    const router = useRouter();
    useEffect(() => {
        const query = tabsData[activeTab].query;
        if (query) {
            router.push(`?tab=${query}`);
        }
    }, [activeTabIndex]);

    return (
        <div className='flex w-full flex-col gap-6 rounded-md py-8 px-4 shadow-sm'>
            <div className='flex items-center gap-4'>
                {tabsData.map((tab, index) => (
                    <Link
                        className={`${
                            activeTab === index
                                ? 'border-b-2 border-primary font-bold text-primary'
                                : ''
                        }`}
                        onClick={() => setActiveTab(index)}
                        key={index}
                        href={`?tab=${tab.query}`}
                    >
                        {tab.header}
                    </Link>
                ))}
            </div>
            <div>{tabsData[activeTab].body}</div>
        </div>
    );
};

export default Tabs;
