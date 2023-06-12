import React, { FC, useEffect, useState } from 'react';
import classes from '../Accordion.module.scss';
import Text from '../../Text/Text';
import Icon from '../../Icon/Icon';
import { Accordion } from '../Accordion';
import { IAccordionItem } from './IAccordionItem';

const AccordionItem: FC<IAccordionItem> = ({
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

export default AccordionItem;
