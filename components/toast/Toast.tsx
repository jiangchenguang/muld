import * as React from 'react';
import { View } from './style';
import { createNS } from '../utils/createNS';
import Icon from '../icon';
import Loading from '../loading';
import Overlay from '../overlay';
import { ToastOptions } from './ToastManager';
import { Type } from './index';

type Props = ToastOptions;
const [bem] = createNS('toast');
class Toast extends React.Component<Props> {
    closeTimer: number | null = null;

    componentDidMount() {
        this.startCloseTimer();
    }

    componentDidUpdate(prevProps: Props) {
        // todo notification中的update有什么用？
        this.restartCloseTimer();
    }

    componentWillUnmount() {
        this.clearCloseTimer();
    }

    onClick = () => {
        const { closeOnClick } = this.props;
        if (closeOnClick) {
            this.close();
        }
    };

    close = () => {
        this.clearCloseTimer();
        if (this.props.onClose) {
            this.props.onClose();
        }
    };

    startCloseTimer = () => {
        if (this.props.duration > 0) {
            this.closeTimer = setTimeout(() => {
                this.close();
            }, this.props.duration);
        }
    };

    clearCloseTimer = () => {
        if (this.closeTimer) {
            clearTimeout(this.closeTimer);
            this.closeTimer = null;
        }
    };

    restartCloseTimer = () => {
        this.clearCloseTimer();
        this.startCloseTimer();
    };

    genIcon() {
        const { icon, type, loadingType } = this.props;
        const hasIcon = icon || type === Type.Success || type === Type.Fail;
        if (hasIcon) {
            return <Icon className={bem('icon')} name={icon || type} size="2.25rem" />;
        }
        if (type === Type.Loading) {
            return <Loading type={loadingType} />;
        }
        return null;
    }

    genMessage() {
        const { message } = this.props;
        if (message) {
            return <div className={bem('text')}>{message}</div>;
        }
        return null;
    }

    renderContent() {
        const { position, type, icon } = this.props;
        return (
            <View className={bem([position, { [type]: !icon }])} onClick={this.onClick}>
                {this.genIcon()}
                {this.genMessage()}
            </View>
        );
    }

    render() {
        const { overlay } = this.props;
        const onClickOverlay = () => {
            if (this.props.closeOnClickOverlay) {
                this.close();
            }
        };
        const overlayProp = {
            show: true,
            onClick: onClickOverlay,
        };
        const content = this.renderContent();
        return overlay ? <Overlay {...overlayProp}>{content}</Overlay> : content;
    }
}

export default Toast;
