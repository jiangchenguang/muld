# Toast

### install

```js
import { toast } from '@trillion/toast';
```

## Usage

### Text

```js
toast('Some messages');
```

### loading

```js
toast('loading');
```

### Success/Fail

使用 `toast.success` 方法展示成功提示，使用 `toast.fail` 方法展示失败提示
```js
toast.success('Success');
toast.fail('Fail');
```

### Custom Icon todo

### Update Message todo

### Singleton todo

### Set Default Options todo

## API

### Methods

| Methods | Attribute | Return value | Description |
| --- | --- | --- | --- |
| toast | `options | message` | toast instance | Show toast |
| toast.success | `options | message` | toast instance | Show success toast |
| toast.fail | `options | message` | toast instance | Show fail toast |

### Options

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| type | Can be set to `success` `fail` `text` `loading` | _string_ | `text` |
| loadingType | Loading icon type, can be set to `spinner` | _string_ | `circular` |
| position | Can be set to `top` `middle` `bottom` | _string_ | `middle` |
| message | Message | _string_ | `''` |
| overlay `v2.2.13` | Whether to show overlay | _boolean_ | `false` |
| closeOnClickOverlay `v2.2.13` | Whether to close when click overlay | _boolean_ | `false` |
| onClose | Callback function after close | _Function_ | - |
| duration | Toast duration(ms), won't disappear if value is 0 | _number_ | `2000` |
| closeOnClick | Whether to close after clicked | _boolean_ | `false` |
