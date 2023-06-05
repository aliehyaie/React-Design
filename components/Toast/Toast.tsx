import React from 'react';
import { toast as toastify, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { twMerge } from 'tailwind-merge';
import Icon from '../Icon/Icon';

const getToastStyleByType = (type: ToastOptions['type']) => {
    switch (type) {
        case 'success':
            return {
                textColor: 'text-success',
                borderColor: 'border-success',
                icon: 'icon-checkmark-circle',
            };
        case 'info':
            return {
                textColor: 'text-info',
                borderColor: 'border-info',
                icon: 'icon-info-outline',
            };
        case 'warning':
            return {
                textColor: 'text-warning',
                borderColor: 'border-warning',
                icon: 'icon-alert-circle',
            };
        case 'error':
            return {
                textColor: 'text-error',
                borderColor: 'border-error',
                icon: 'icon-close-circle-outline',
            };
        default:
            return {
                textColor: 'text-success',
                borderColor: 'border-success',
                icon: 'icon-checkmark-circle',
            };
    }
};

const toastCreator = (
    content: string,
    iconName: string,
    options: ToastOptions
) => {
    const { textColor, borderColor, icon } = getToastStyleByType(options.type);

    return toastify(content, {
        icon: <Icon iconName={icon} className={`${textColor} text-base`} />,
        type: options.type,
        autoClose: options.autoClose ?? 1000,
        bodyClassName: `text-right text-xs ${textColor}`,
        hideProgressBar: options.hideProgressBar ?? true,
        ...options,
        className: `${twMerge(
            'border-r-4 min-h-[2.5rem]',
            options.className as string,
            borderColor as string
        )}`,
    });
};

export const toast = {
    success(content: string, options?: ToastOptions) {
        return toastCreator(content, 'icon-checkmark-circle-2', {
            type: 'success',
            ...options,
        });
    },
    error(content: string, options?: ToastOptions) {
        return toastCreator(content, 'icon-minus-circle', {
            type: 'error',
            ...options,
        });
    },
    info(content: string, options?: ToastOptions) {
        return toastCreator(content, 'icon-info', { type: 'info', ...options });
    },
    warning(content: string, options?: ToastOptions) {
        return toastCreator(content, 'icon-alert-circle', {
            type: 'warning',
            ...options,
        });
    },
};
