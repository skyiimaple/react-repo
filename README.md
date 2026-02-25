# React Repo Monorepo

这是一个基于 Lerna + pnpm Monorepo 架构的 React 19 + TypeScript 项目，用于对 Ant Design 进行二次封装开发。

## 项目结构

```text
.
├── packages
│   ├── components  # 组件库
│   ├── utils       # 工具函数库
│   └── hooks       # 自定义 Hooks 库
├── jest.config.js  # Jest 配置
├── lerna.json      # Lerna 配置
└── pnpm-workspace.yaml # pnpm workspace 配置
```

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 运行单元测试

```bash
pnpm test
```

### 构建所有包

```bash
pnpm build
```

## 如何添加新组件

1. 在 `packages/components/src` 目录下创建新组件文件夹（例如 `MyComponent`）。
2. 编写组件代码、样式及类型定义。
3. 在 `packages/components/src/index.ts` 中导出新组件。
4. 在组件目录下添加 `__tests__` 进行测试。

## 如何添加新包

1. 在 `packages` 目录下创建新文件夹（例如 `my-new-pkg`）。
2. 运行 `pnpm init` 初始化 `package.json`，并将名称设置为 `@react-repo/my-new-pkg`。
3. 参考 `packages/components` 配置 `tsconfig.json` 和 `tsup` 构建脚本。
4. 在根目录运行 `pnpm install` 刷新依赖。

## 封装规范

- **继承性**：所有封装组件必须继承 antd 原生属性。
- **自定义主题**：支持通过 `ConfigProvider` 或组件 props 注入自定义主题。
- **Design Token**：优先使用 antd 的 `theme.useToken()` 获取 Design Token，确保风格统一。
