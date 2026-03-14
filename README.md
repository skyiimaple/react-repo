# shrimp-design-react

个人学习网站，个人使用。记录学习过程

## 📚 文档

详细的组件文档请查看 [docs/README.md](./docs/README.md)

### 组件列表

- [Image 图片组件](./docs/components/image.md) - 支持预览和错误处理的图片组件
- [Layout 布局组件](./docs/components/layout.md) - 灵活的布局组件，支持多种布局模式
- [SearchForm 搜索表单组件](./docs/components/search-form.md) - 功能强大的搜索表单组件

## 🚀 快速开始

### 安装依赖

```bash
pnpm install
# 安装一个新的包 示例styles 包
pnpm add "@shrimp-design-react/styles@workspace:*" -w
# 安装一个新的包 到指定目录
pnpm add react --filter "{项目名字}"
```

### 使用组件

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

## 📦 组件包

### @shrimp-design-react/components

包含以下组件：

1. **Image** - 图片组件
   - 支持图片预览功能
   - 自动错误处理
   - 支持自定义渲染

2. **Layout** - 布局组件
   - 6 种布局模式（B、HB、HAB、HBF、AB、BF）
   - 侧边栏可折叠
   - 响应式设计

3. **SearchForm** - 搜索表单组件
   - 支持多种表单控件类型
   - 自动响应式布局
   - 配置式和插槽式两种使用方式
