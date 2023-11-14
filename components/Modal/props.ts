import type {MouseEvent} from "react";

export interface ModalProps {
    onClose: (e?: MouseEvent<HTMLSpanElement>) => void;
    nodeId?: string;
    isOpen: boolean;
    className?: string;
    closeModalOnBack?: boolean;
}
