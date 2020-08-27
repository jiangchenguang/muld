import * as React from 'react';
import ToastManager, { ToastInstance, ToastOptions } from './ToastManager';

let messageInstance: any;

export enum Position {
    Top = 'top',
    Middle = 'middle',
    Bottom = 'bottom',
}
export enum Type {
    Default = 'text',
    Success = 'success',
    Fail = 'fail',
    Loading = 'loading',
}
export interface userOptions {
    message: React.ReactNode;
    position?: Position;
    type?: Type;
    icon?: string;
    overlay?: boolean;
    closeOnClickOverlay?: boolean;
    onClose?: () => void;
    duration?: number;
    loadingType?: 'circular' | 'spinner';
    closeOnClick?: boolean;
}
const defaultOptions = {
    message: '',
    type: Type.Default,
    icon: '',
    position: Position.Middle,
    overlay: false,
    closeOnClickOverlay: false,
    onClose() {},
    duration: 2000,
    closeOnClick: false,
    // className: '',
    // onClose: null,
    // onOpened: null,
    // iconPrefix: undefined,
    // transition: 'van-fade',
    // forbidClick: false,
    // getContainer: 'body',
    // overlayStyle: null,
};
export type propsWithoutDefaultOptions = Omit<userOptions, keyof typeof defaultOptions>;

const currentOptions = {
    ...defaultOptions,
};

/**
 * 获取Toast实例，用于展示
 * @param cb
 */
function getToastInstance(cb: (i: ToastInstance) => void) {
    if (messageInstance) {
        cb(messageInstance);
        return;
    }
    ToastManager.newInstance((instance) => {
        if (messageInstance) {
            cb(messageInstance);
            return;
        }
        messageInstance = instance;
        cb(instance);
    });
}

/**
 * 合并Toast选项
 */
function mergeOptions(userInput: string | userOptions): ToastOptions {
    const userOptions = typeof userInput === 'string' ? { message: userInput } : userInput;
    // todo 一个duration = 0，另一个默认，先后点击2个，不会消失
    return {
        ...currentOptions,
        ...userOptions,
    };
}
function toast(stringOrOption: string | userOptions) {
    const mergedOption = mergeOptions(stringOrOption);
    if (!mergedOption.message) {
        return;
    }
    getToastInstance((instance) => {
        instance.notice(mergedOption);
    });
}
const createMethod = (type: Type) => (args: string | userOptions) => {
    const opts = typeof args === 'string' ? { type, message: args } : { type, ...args };
    return toast(opts);
};
toast.success = createMethod(Type.Success);
toast.fail = createMethod(Type.Fail);
toast.loading = createMethod(Type.Loading);
export default toast;
