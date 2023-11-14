import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import {useEffect,type FC,type PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';
import Icon from "../Icon";
import classes from './styles.module.scss';
import type { ModalProps } from './props';

const Modal: FC<PropsWithChildren & ModalProps> = ({
    children,
    isOpen,
    nodeId,
    onClose,
    className,
    closeModalOnBack,
}) => {
    const router = useRouter();
    useEffect(() => {
        if (isOpen && closeModalOnBack) {
            router.push('#modal');
            const closeModalOnPopState = () => {
                onClose();
            };
            window.addEventListener('popstate', closeModalOnPopState);
            return () => {
                window.removeEventListener('popstate', closeModalOnPopState);
            };
        }
    }, [isOpen]);

    const closeModalHandler = () => {
        if (router.asPath.includes('#modal')) {
            router.back();
        }
        onClose();
    };

    return ReactDOM.createPortal(
        <>
            {isOpen && (
                <span onClick={closeModalHandler} className={classes.overlay} />
            )}
            <div
                className={`${classes.modal} ${
                    isOpen ? classes.active : ''
                } ${className}`}
            >
                <div>
                    <Icon
                        onClick={closeModalHandler}
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
