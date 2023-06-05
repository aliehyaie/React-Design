import { IAccordion } from '../IAccordion';
import React from 'react';

type AccordionItem = {
    id: string | number;
    title: string | React.ReactElement;
    content: string | React.ReactElement;
    children?: AccordionItem[];
};

export interface IAccordionItem
    extends Pick<IAccordion, 'isMultiple' | 'itemClassName'> {
    accordionItem: AccordionItem;
    isActive: boolean;
    toggleOnlyOneAccordionItemHandler: (id: AccordionItem['id']) => void;
}
