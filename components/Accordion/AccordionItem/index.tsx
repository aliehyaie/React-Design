import { useEffect, useState, type FC,type MouseEvent } from 'react';
import Text from '../../Text';
import Icon from '../../Icon';
import Accordion from "../index";
import classes from '../styles.module.scss';
import type { AccordionItemProps } from './props';

const AccordionItem: FC<AccordionItemProps> = ({
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
        e: MouseEvent<HTMLDivElement>
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
