import React, { PropsWithChildren } from 'react';
import dynamic from 'next/dynamic';
import classes from './Modal.module.scss';
import Icon from '../Icon/Icon';
import { IModal } from './IModal';
import ReactDOM from 'react-dom';

const Modal: React.FC<PropsWithChildren & IModal> = ({
    children,
    isOpen,
    nodeId,
    onClose,
    className,
}) => {
    return ReactDOM.createPortal(
        <>
            {isOpen && <span onClick={onClose} className={classes.overlay} />}
            <div
                className={`${classes.modal} ${
                    isOpen ? classes.active : ''
                } ${className}`}
            >
                <div>
                    <Icon
                        onClick={onClose}
                        iconName='icon-close text-2xl cursor-pointer'
                    />
                </div>
                {children}
            </div>
        </>,
        nodeId ? document.getElementById(nodeId)! : document.body
    );
};

export default dynamic(() => Promise.resolve(Modal), {
    ssr: false,
});
