# Toast 轻提示

### 介绍

在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景。

### 引入

```js
import { toast } from '@trillion/toast';
```

## 代码演示

### 文字提醒

```js
toast('提醒内容');
```

### 加载提示
```js
toast('提醒内容');
```

### 成功/失败提醒

使用 `toast.success` 方法展示成功提示，使用 `toast.fail` 方法展示失败提示
```js
toast.success('成功文案');
toast.fail('失败文案');
```

### 自定义图标 todo

### 动态更新提示 todo

### 单例模式 todo

### 修改默认配置 todo

## API

### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| toast | 展示提示 | `options | message` | toast 实例 |
| toast.success | 展示成功提示 | `options | message` | toast 实例 |
| Toast.fail | 展示失败提示 | `options | message` | toast 实例 |

### Options

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 提示类型，可选值为 `success` `fail` `text` `loading` | _string_ | `text` |
| loadingType | [加载图标类型](#/zh-CN/loading), 可选值为 `spinner` | _string_ | `circular` |
| position | 位置，可选值为 `top` `bottom` | _string_ | `middle` |
| message | 文本内容，支持通过`\n`换行 | _string_ | `''` | - |
| overlay | 是否显示背景遮罩层 | _boolean_ | `false` |
| closeOnClickOverlay `v2.2.13` | 是否在点击遮罩层后关闭 | _boolean_ | `false` |
| onClose | 关闭时的回调函数 | _Function_ | - |
| duration | 展示时长(ms)，值为 0 时，toast 不会消失 | _number_ | `2000` |
| closeOnClick | 是否在点击后关闭 | _boolean_ | `false` |
