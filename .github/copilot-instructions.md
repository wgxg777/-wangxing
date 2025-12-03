# Copilot Instructions for this Repository

Vue 3 组件库 Monorepo，使用 pnpm + Vite + TypeScript，包含业务组件、playground 和文档站。

## Repository Overview
- 主包：`packages/business`（npm 包名 `@wangxing777/business`）
- Playground：`play`（本地开发调试）
- 文档：`docs`（VitePress 中文文档站）

## Working Assumptions
- OS: Windows; default shell: Windows PowerShell 5.1.
- Tech: Vue 3 + Vite + TypeScript Monorepo via pnpm.

## Directory Structure
- `packages/business/src/`：组件与工具源码
  - 组件按文件夹组织（如 `button/index.vue`、`button/util.ts`）
  - `index.ts` 是唯一导出入口
- `play/src/`：Playground 应用，用于快速验证组件
- `docs/`：VitePress 文档，`docs/demos/` 存放示例组件

## Developer Workflows (Monorepo)
- Install and build all:
  ```powershell
  pnpm i
  pnpm -r run build
  ```
- Playground (run local app):
  ```powershell
  pnpm --filter play dev
  ```
- Docs (VitePress):
  ```powershell
  pnpm --filter docs dev
  pnpm --filter docs build
  ```

## Integration Points
- Package: `packages/business` 使用 Vite library mode，`vue` 作为 external。
- Types: `vite-plugin-dts` 自动生成 `.d.ts`。
- Docs: VitePress，组件示例位于 `docs/demos/`，通过 `<ClientOnly>` 引入。

## Export Conventions (重要)
- **组件导出会自带类型**：
  - `.vue` 组件使用 `<script setup lang="ts">` + `defineProps<{ ... }>()`
  - 在 `index.ts` 导出组件后，构建会自动生成类型声明
  - 消费方 `import { Button } from '@wangxing777/business'` 自动获得 props/事件/插槽类型
- **TypeScript 工具/类型需手动导出**：
  - `util.ts` 中的枚举、函数、type 不会自动包含在组件类型中
  - 必须在 `src/index.ts` 显式 `export { ... } from './path'`
  - 示例：
    ```typescript
    // 组件导出（自带类型）
    export { default as Button } from './button/index.vue'
    
    // 工具/类型手动导出
    export { SelectedItemType, getIcon } from './button/util'
    export type { CustomType } from './types'
    ```

## Project Patterns
- 组件结构：`button/index.vue`（组件）+ `button/util.ts`（工具）
- 导出入口：`src/index.ts` 手动维护所有导出
- 构建配置：`vite.config.ts` 使用 `@vitejs/plugin-vue` + `vite-plugin-dts`，`vue` 外部化
- 文档示例：`docs/demos/` 下创建 `.vue` 示例，在 markdown 中通过 `<ClientOnly>` 引入

## Action Items for Maintainers
- 添加 ESLint/Prettier 共享配置，在 `.github/workflows/ci.yml` 启用 CI。
- 确认发布策略（npm scope、版本管理、发布流程）。
- 补充组件开发规范文档（props 约定、事件命名、插槽使用、样式规范）。

## How Agents Should Operate
- 使用 pnpm workspace filters（`--filter`）来操作 `play`/`docs`/packages。
- 保持 `vue` 作为 external；避免打包 peer deps。
- 优先使用 SFC + TS；确保为公共 API 生成 dts。
- 添加组件时，在 `docs/demos/` 创建最小示例并更新文档。
- **关键**：每个新组件或工具必须在 `src/index.ts` 手动添加导出。

---

Feedback needed:
- What framework and build tool should be used?
- Should we scaffold a React or Vue component library now?
- Any publishing or CI/CD requirements to include?
