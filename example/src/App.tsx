// import { Button } from 'react-repo';

// const App = () => (
// );
import React from 'react'
import { Button } from '@react-repo/components'
import { useToggle } from '@react-repo/hooks'
import { formatDate } from '@react-repo/utils'
import { Space, Card, Typography, Divider } from 'antd'

const { Title, Text } = Typography

const App: React.FC = () => {
  const [isOn, toggle] = useToggle(false)
  const today = new Date()

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <Card>
        <Title level={2}>Monorepo 组件库演示</Title>
        <Text type="secondary">
          此示例展示了如何使用工作区内的 @react-repo/components, @react-repo/hooks 和
          @react-repo/utils。
        </Text>
        <Divider />
        //{' '}
        <div style={{ padding: 20 }}>
          // {/* 1. 继承 antd 属性 */}
          //{' '}
          <Button type="primary" onClick={() => alert('Clicked!')}>
            // 封装按钮 //{' '}
          </Button>
          // {/* 2. 自动注入项目自定义主题 (Design Token) */}
          // <Button style={{ marginLeft: 80, color: 'red' }}>// 带主题的按钮 // </Button>
          // {/* 3. 禁用项目主题，回退到 antd 默认样式 */}
          // <Button useProjectTheme={false}>// 原始 antd 样式 // </Button>
          //{' '}
        </div>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <section>
            <Title level={4}>1. 二次封装的 Button 组件</Title>
            <Space>
              <Button type="primary">主按钮</Button>
              <Button>次按钮</Button>
              <Button danger>危险按钮</Button>
              <Button useProjectTheme={false}>原生 antd 按钮</Button>
            </Space>
          </section>

          <Divider />

          <section>
            <Title level={4}>2. 自定义 Hook (useToggle)</Title>
            <Space align="center">
              <Text>当前状态: {isOn ? '✅ 开启' : '❌ 关闭'}</Text>
              <Button onClick={toggle}>切换状态</Button>
            </Space>
          </section>

          <Divider />

          <section>
            <Title level={4}>3. 工具函数 (formatDate)</Title>
            <Text>
              今日日期: <Text code>{formatDate(today)}</Text>
            </Text>
          </section>
        </Space>
      </Card>
    </div>
  )
}

export default App
