import * as React from 'react';
import ReactDom from 'react-dom';
import { userOptions, propsWithoutDefaultOptions } from './index';
import Toast from './Toast';
import { getUuid } from './utils';

interface Props {
    content?: React.ReactNode;
}
export type ToastOptions = Required<Omit<userOptions, keyof propsWithoutDefaultOptions>> &
    Partial<propsWithoutDefaultOptions>;
interface State {
    notices: (ToastOptions & { key: React.Key })[];
}
export interface ToastInstance {
    notice: (noticeArgs: ToastOptions) => void;
    removeNotice: (key: React.Key) => void;
}

class ToastManager extends React.Component<Props, State> {
    static newInstance: (callback: (instance: ToastInstance) => void) => void;

    noticeRefs: { [key: string]: Toast } = {};

    state: State = {
        notices: [],
    };

    add = (args: ToastOptions) => {
        this.setState((prevState) => {
            const { notices } = prevState;
            if (notices.length) {
                const notice = {
                    ...notices[0],
                    ...args,
                };
                return {
                    notices: [notice],
                };
            }
            return {
                notices: [
                    {
                        key: getUuid(),
                        ...args,
                    },
                ],
            };
        });
    };

    remove = (key: React.Key) => {
        this.setState((prevState) => ({
            notices: prevState.notices.filter((notice) => notice.key !== key),
        }));
    };

    render() {
        const { notices } = this.state;
        const noticeNodes = notices.map((notice) => {
            const onClose = () => {
                notice.onClose();
                delete this.noticeRefs[notice.key];
                this.remove(notice.key);
            };
            const { key, ...others } = notice;
            const noticeProps = {
                ...others,
                onClose,
            };
            const ref = (instance: Toast) => {
                this.noticeRefs[key] = instance;
            };
            return <Toast key={key} ref={ref} {...noticeProps} />;
        });

        console.log('noticeNodes:', noticeNodes);
        return <div className="notification">{noticeNodes}</div>;
    }
}

ToastManager.newInstance = function newNotificationInstance(callback) {
    const div = document.createElement('div');
    document.body.appendChild(div);
    let called = false;
    function ref(manager: ToastManager) {
        if (called) {
            return;
        }
        called = true;
        callback({
            notice(args: ToastOptions) {
                manager.add(args);
            },
            removeNotice(key: React.Key) {
                manager.remove(key);
            },
        });
    }

    ReactDom.render(<ToastManager ref={ref} />, div);
};

export default ToastManager;
