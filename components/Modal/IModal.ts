import React from 'react';

export interface IModal {
    onClose: (e?: React.MouseEvent<HTMLSpanElement>) => void;
    nodeId?: string;
    isOpen: boolean;
    className?: string;
    closeModalOnBack?: boolean;
}
