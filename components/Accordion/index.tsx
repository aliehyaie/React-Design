import { useState,Fragment, type FC } from 'react';
import AccordionItem from './AccordionItem';
import classes from './styles.module.scss';
import type { AccordionProps } from './props';

const Accordion: FC<AccordionProps> = ({
    accordionItems,
    isMultiple = true,
    className,
    itemClassName,
}) => {
    const [selectedAccordionItemId, setSelectedAccordionItemId] = useState<
        null | number | string
    >(null);
    const toggleOnlyOneAccordionItemHandler = (
        accordionItemId: number | string
    ) => {
        if (selectedAccordionItemId === accordionItemId) {
            setSelectedAccordionItemId(null);
            return;
        }
        setSelectedAccordionItemId(accordionItemId);
    };

    return (
        <div className={`${classes.accordion} ${className}`}>
            {accordionItems.map(accordionItem => {
                return (
                    <Fragment key={accordionItem.id}>
                        <AccordionItem
                            accordionItem={accordionItem}
                            isMultiple={isMultiple}
                            itemClassName={itemClassName}
                            isActive={
                                selectedAccordionItemId === accordionItem.id
                            }
                            toggleOnlyOneAccordionItemHandler={
                                toggleOnlyOneAccordionItemHandler
                            }
                        />
                    </Fragment>
                );
            })}
        </div>
    );
};

export default Accordion;