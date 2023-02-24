import React from 'react';

interface AccordionItem {
    id: string | number;
    title: string | React.ReactElement;
    content: string | React.ReactElement;
}

export interface IAccordion {
    accordionItems: AccordionItem[];
    isMultiple?: boolean;
    className?: string;
    itemClassName?: string;
}

export interface IAccordionItem
    extends Pick<IAccordion, 'isMultiple' | 'itemClassName'> {
    accordionItem: AccordionItem;
    isActive: boolean;
    toggleOnlyOneAccordionItemHandler: (id: AccordionItem['id']) => void;
}
