import * as React from 'react';
import styled from 'styled-components';
import DemoSection from '@trillion/muld-tools/site/mobile/layout/DemoSection';
import DemoBlock from '@trillion/muld-tools/site/mobile/layout/DemoBlock';
import { Button } from '../../index';
import toast, { Position } from '..';
import { $padding_md, $padding_sm } from '../../style/var';

export default function ToastDemo(): React.ReactNode {
    return (
        <View className="demo-rate">
            <DemoBlock title="文字提醒">
                <div className="demo-rate-row">
                    <Button onClick={() => toast('提醒文字')}>文字提醒</Button>
                </div>
            </DemoBlock>
            <DemoBlock title="加载提示">
                <div className="demo-rate-row">
                    <Button
                        onClick={() =>
                            toast.loading({
                                message: '正在加载',
                            })
                        }
                    >
                        加载提示
                    </Button>
                </div>
            </DemoBlock>
            <DemoBlock title="成功/失败提醒">
                <div className="demo-rate-row">
                    <Button
                        onClick={() =>
                            toast.success({
                                message: '成功文案',
                                position: Position.Top,
                            })
                        }
                    >
                        成功文案
                    </Button>
                </div>
                <div className="demo-rate-row">
                    <Button
                        onClick={() =>
                            toast.fail({
                                message: '失败文案',
                                position: Position.Bottom,
                            })
                        }
                    >
                        失败文案
                    </Button>
                </div>
            </DemoBlock>
            <DemoBlock title="展示时长">
                <div className="demo-rate-row">
                    <Button
                        onClick={() =>
                            toast({
                                message: `duration设置为0不会自动关闭`,
                                duration: 0,
                            })
                        }
                    >
                        duration设置为0不会自动关闭
                    </Button>
                </div>
            </DemoBlock>
            <DemoBlock title="支持点击关闭">
                <div className="demo-rate-row">
                    <Button
                        onClick={() =>
                            toast({
                                message: `点击我关闭Toast`,
                                closeOnClick: true,
                            })
                        }
                    >
                        支持点击关闭
                    </Button>
                </div>
            </DemoBlock>
        </View>
    );
}

const View = styled(DemoSection)`
    &.demo-rate {
        .mul-doc-demo-block {
            padding: 0 ${$padding_md};
        }

        .mul-doc-demo-block__title {
            padding-left: 0;
        }

        .demo-rate-row {
            margin-bottom: ${$padding_sm};
        }
    }
`;
