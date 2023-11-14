import {useEffect, type RefObject } from 'react';

const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
    ref: RefObject<T>,
    handler: (event: MouseEvent) => void,
    mouseEvent: 'mousedown' | 'mouseup' = 'mousedown'
): void => {
    useEffect(() => {
        const listener = (event: MouseEvent) => {
            const el = ref?.current;

            // Do nothing if clicking ref's element or descendent elements
            if (!el || el.contains(event.target as Node)) {
                return;
            }
            handler(event);
        };

        document.addEventListener(mouseEvent, listener);

        return () => {
            document.removeEventListener(mouseEvent, listener);
        };
    }, [ref, handler, mouseEvent]);
};

export default useOnClickOutside;
