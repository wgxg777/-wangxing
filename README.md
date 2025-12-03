# 王兴组件库 Monorepo

基于 Vue 3 的组件库，使用 pnpm 管理 Monorepo，包含：
- `packages/business`：业务组件包（包名 `@wangxing777/business`）
- `play`：本地 playground，用于快速开发与验证
- `docs`：VitePress 文档站

## 快速开始

```powershell
pnpm i
pnpm -r run build
pnpm --filter play dev
pnpm --filter docs dev
```

## 开发约定
- 组件使用 SFC（`.vue`）与 TS 类型。
- 组件导出：`packages/business/src/index.ts` 提供默认与命名导出。
- 构建：`packages/business/vite.config.ts` 采用 Vite 库模式并生成 dts。
- 文档：`docs` 通过 VitePress，示例位于 `docs/demos`。

## 文档访问

[https://wgxg777.github.io/-wangxing/](https://wgxg777.github.io/-wangxing/)