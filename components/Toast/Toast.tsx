import React from 'react';
import { toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { twMerge } from 'tailwind-merge';
import Icon from '../Icon/Icon';

const toastCreator = (
    content: string,
    iconName: string,
    options: ToastOptions
) => {
    const textColor =
        options.type === 'success'
            ? 'text-success'
            : options.type === 'info'
            ? 'text-info'
            : options.type === 'warning'
            ? 'text-warning'
            : 'text-error';
    const borderColor =
        options.type === 'success'
            ? 'border-success'
            : options.type === 'info'
            ? 'border-info'
            : options.type === 'warning'
            ? 'border-warning'
            : 'border-error';

    return toast(content, {
        icon: (
            <Icon
                iconName={'icon-alert-circle'}
                className={`${textColor} text-base`}
            />
        ),
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
        style: { color: '#000' },
    });
};

export const toastify = {
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
