import styled from 'styled-components';
import { $Toast, $padding_xs } from '../style/var';

export const View = styled.div`
    &.mul-toast {
        position: fixed;
        top: 50%;
        left: 50%;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        box-sizing: content-box;

        // hack for avoid max-width when use left & fixed
        width: ${$Toast.default_width};
        max-width: ${$Toast.max_width};
        min-height: ${$Toast.default_min_height};
        padding: ${$Toast.default_padding};
        color: ${$Toast.text_color};
        font-size: ${$Toast.font_size};
        line-height: ${$Toast.line_height};

        // allow newline charactor
        white-space: pre-wrap;
        text-align: center;
        word-wrap: break-word;
        background-color: ${$Toast.background_color};
        border-radius: ${$Toast.border_radius};
        transform: translate3d(-50%, -50%, 0);

        &.mul-toast--text {
            min-width: ${$Toast.text_min_width};
            min-height: 0;
            padding: ${$Toast.text_padding};
        }

        .mul-toast__icon {
            margin-bottom: ${$padding_xs};
        }

        &.mul-toast--top {
            top: ${$Toast.position_top_distance};
        }
        &.mul-toast--bottom {
            top: auto;
            bottom: ${$Toast.position_bottom_distance};
        }
    }
`;
