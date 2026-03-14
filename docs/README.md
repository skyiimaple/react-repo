# Shrimp Design React 组件文档

欢迎使用 Shrimp Design React 组件库！这是一个基于 React 和 Arco Design 的组件库，提供了一些常用的业务组件。

## 组件列表

### 📦 [Image 图片组件](./components/image.md)

一个增强的图片组件，支持图片预览、错误处理和自定义渲染。

**主要特性：**
- 支持图片预览功能（基于 viewerjs）
- 自动错误处理，支持自定义错误图片
- 支持自定义渲染
- 完整的 TypeScript 类型支持

### 🎨 [Layout 布局组件](./components/layout.md)

一个灵活的布局组件，支持多种布局模式，包括头部、侧边栏、主内容和底部区域的组合。

**主要特性：**
- 支持 6 种布局模式（B、HB、HAB、HBF、AB、BF）
- 侧边栏可折叠功能
- 响应式设计
- 支持全高度布局

### 🔍 [SearchForm 搜索表单组件](./components/search-form.md)

一个功能强大的搜索表单组件，支持多种表单控件类型，自动响应式布局。

**主要特性：**
- 支持多种表单控件类型（input、select、date、radio、checkbox 等）
- 自动响应式布局
- 支持配置式和插槽式两种使用方式
- 完整的 TypeScript 类型支持

## 快速开始

### 安装

```bash
pnpm install @shrimp-design-react/components
```

### 使用

```tsx
import { Image, Layout, SearchForm } from '@shrimp-design-react/components'

function App() {
  return (
    <Layout mode="HB" header={<div>头部</div>}>
      <SearchForm
        fields={{
          name: {
            type: 'input',
            label: '姓名',
            placeholder: '请输入姓名'
          }
        }}
        onSearch={(values) => console.log(values)}
      />
      <Image src="https://example.com/image.jpg" preview />
    </Layout>
  )
}
```

## 组件概览

| 组件 | 描述 | 文档链接 |
|------|------|----------|
| Image | 图片组件，支持预览和错误处理 | [查看文档](./components/image.md) |
| Layout | 布局组件，支持多种布局模式 | [查看文档](./components/layout.md) |
| SearchForm | 搜索表单组件，支持多种控件类型 | [查看文档](./components/search-form.md) |

## 开发指南

### 项目结构

```
packages/
├── components/          # 组件包
│   ├── img/            # Image 组件
│   ├── layout/         # Layout 组件
│   └── search-form/    # SearchForm 组件
├── styles/             # 样式包
└── utils/              # 工具包
```

### 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

## 依赖说明

- React >= 16.8.0
- @arco-design/web-react
- viewerjs (Image 组件预览功能需要)

## 许可证

ISC

## 贡献

欢迎提交 Issue 和 Pull Request！
