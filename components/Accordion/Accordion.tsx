import React, { useEffect, useState } from 'react';
import classes from './Accordion.module.scss';
import { IAccordion, IAccordionItem } from './IAccordion';
import Text from '../Text/Text';
import Icon from '../Icon/Icon';

const AccordionItem: React.FC<IAccordionItem> = ({
    accordionItem,
    isMultiple,
    isActive = false,
    toggleOnlyOneAccordionItemHandler,
    itemClassName,
}) => {
    const [isVisible, setIsVisible] = useState(isActive);
    useEffect(() => {
        setIsVisible(isActive);
    }, [isActive]);
    const toggleAccordionItemHandler = (
        e: React.MouseEvent<HTMLDivElement>
    ) => {
        e.stopPropagation();
        setIsVisible(prevState => !prevState);
    };
    return (
        <div className={`${classes.item} ${itemClassName}`}>
            <div
                className={classes.title}
                onClick={e =>
                    isMultiple
                        ? toggleAccordionItemHandler(e)
                        : toggleOnlyOneAccordionItemHandler(accordionItem.id)
                }
            >
                <Text variant='h2'>{accordionItem.title}</Text>
                <Icon
                    className={`text-lg ${classes.icon} ${
                        isVisible ? classes.show : ''
                    }`}
                    iconName='icon-arrow-ios-downward'
                />
            </div>
            <Text
                variant='p'
                className={`${classes.content} ${
                    isVisible ? classes.show : ''
                }`}
            >
                {accordionItem.content}
            </Text>
            {accordionItem?.children && (
                <Accordion
                    className={`mt-2 ${classes.content} ${
                        isVisible ? classes.show : ''
                    }`}
                    accordionItems={accordionItem.children}
                />
            )}
        </div>
    );
};

export const Accordion: React.FC<IAccordion> = ({
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
