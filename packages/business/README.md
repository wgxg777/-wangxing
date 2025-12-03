# @wangxing777/business

Vue 3 业务组件库，基于 Element Plus 封装。

## 安装

```bash
npm install @wangxing777/business element-plus
# 或
pnpm add @wangxing777/business element-plus
```

## 使用

```typescript
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import { WxButton, WxBaseTable } from '@wangxing777/business'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(ElementPlus)
app.component('WxButton', WxButton)
app.component('WxBaseTable', WxBaseTable)
```

或者全局导入：

```typescript
import * as WangxingBusiness from '@wangxing777/business'

Object.entries(WangxingBusiness).forEach(([name, component]) => {
  if (name.startsWith('Wx')) {
    app.component(name, component)
  }
})
```

## 组件列表

- **WxButton** - 按钮组件
- **WxBaseTable** - 基础表格组件

## Peer Dependencies

- Vue >= 3.4
- Element Plus >= 2.7.0

## 文档

查看完整文档：[待添加]

## License

MIT
