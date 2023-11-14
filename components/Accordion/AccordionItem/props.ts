import {ReactElement} from "react";
import type {AccordionProps} from "../props";

type IAccordionItem = {
    id: string | number;
    title: string | ReactElement;
    content: string | ReactElement;
    children?: IAccordionItem[];
};

export interface AccordionItemProps
    extends Pick<AccordionProps, 'isMultiple' | 'itemClassName'> {
    accordionItem: IAccordionItem;
    isActive: boolean;
    toggleOnlyOneAccordionItemHandler: (id: IAccordionItem['id']) => void;
}
