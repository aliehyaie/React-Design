import type { AccordionItemProps } from './AccordionItem/props';

export interface AccordionProps {
    accordionItems: AccordionItemProps['accordionItem'][];
    isMultiple?: boolean;
    className?: string;
    itemClassName?: string;
}
