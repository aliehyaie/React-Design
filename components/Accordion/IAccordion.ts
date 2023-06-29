import { IAccordionItem } from './AccordionItem/IAccordionItem';

export interface IAccordion {
    accordionItems: IAccordionItem['accordionItem'][];
    isMultiple?: boolean;
    className?: string;
    itemClassName?: string;
}
