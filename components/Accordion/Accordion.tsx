import React, { FC, useState } from 'react';
import classes from './Accordion.module.scss';
import { IAccordion } from './IAccordion';
import AccordionItem from './AccordionItem/AccordionItem';

export const Accordion: FC<IAccordion> = ({
    accordionItems,
    isMultiple,
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
                    <React.Fragment key={accordionItem.id}>
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
                    </React.Fragment>
                );
            })}
        </div>
    );
};

Accordion.defaultProps = {
    isMultiple: true,
};
