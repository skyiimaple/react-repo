# @monorepo/components

基于 Ant Design 二次封装的组件库。

## 安装

```bash
pnpm add @monorepo/components
```

## 使用方式

### Button 组件

支持 antd `Button` 的所有属性，并内置了项目级的 Design Token。

```tsx
import { Button } from '@monorepo/components';

const App = () => (
  <Button type="primary" onClick={() => console.log('clicked')}>
    封装按钮
  </Button>
);
```

### API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| useProjectTheme | 是否使用项目自定义主题 | `boolean` | `true` |
| ...antdProps | 继承自 antd Button 的所有属性 | `ButtonProps` | - |

### 自定义主题

通过 `theme` 模块可以访问默认主题配置。

```tsx
import { defaultTheme } from '@monorepo/components';
```

## 开发新组件

在 `packages/components/src` 下新建组件目录，并按照以下结构组织：

```text
src/
  MyComponent/
    index.tsx
    MyComponent.tsx
    __tests__/
      MyComponent.test.tsx
```

在 `src/index.ts` 中导出新组件。
