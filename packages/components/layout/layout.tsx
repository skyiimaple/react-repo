/**
 * @Author: suzifeng
 * @Date: 2026-03-12
 * @Description: layout组件
 */
import React, { useState, ReactNode } from 'react'
import { IconRight, IconLeft } from '@arco-design/web-react/es/icon'
import './layout.scss'

export interface LayoutProps {
  /**
   * @description: 布局类型
   */
  mode?: 'B' | 'HB' | 'HAB' | 'HBF' | 'AB' | 'BF'
  /**
   * @description: 是否折叠
   */
  isCollapse?: boolean
  /**
   * @description: 是否可以折叠
   */
  isCanCollapse?: boolean
  /**
   * @description: 是否全高
   */
  fullHeight?: boolean
  /**
   * @description: 是否显示边框
   */
  asideBorder?: boolean
  /**
   * @description: 侧边栏宽度
   */
  asideWidth?: string | number
  /**
   * @description: 头部内容
   */
  header?: ReactNode
  /**
   * @description: 侧边栏内容
   */
  aside?: ReactNode
  /**
   * @description: 底部内容
   */
  footer?: ReactNode
  /**
   * @description: 主内容
   */
  children?: ReactNode
  /**
   * @description: 折叠状态改变回调
   */
  onCollapseChange?: (collapsed: boolean) => void
}

const Layout: React.FC<LayoutProps> = ({
  mode = 'HB',
  isCollapse: controlledCollapse,
  isCanCollapse = true,
  fullHeight = true,
  asideBorder = true,
  asideWidth = 300,
  header,
  aside,
  footer,
  children,
  onCollapseChange,
}) => {
  const [internalCollapse, setInternalCollapse] = useState(false)
  const collapsed =
    controlledCollapse !== undefined ? controlledCollapse : internalCollapse

  const handleCollapse = () => {
    const newCollapsed = !collapsed
    if (controlledCollapse === undefined) {
      setInternalCollapse(newCollapsed)
    }
    onCollapseChange?.(newCollapsed)
  }

  const asideWidthValue =
    typeof asideWidth === 'number' ? `${asideWidth}px` : asideWidth

  const modeClass = `mode-${mode.toLowerCase()}`
  const fullHeightClass = fullHeight ? 'full-height' : ''

  return (
    <div className={`sp-layout-container ${modeClass} ${fullHeightClass}`}>
      {mode.includes('H') && header && (
        <header className="sp-layout-header">{header}</header>
      )}
      {mode.includes('A') && aside && (
        <div
          className={`sp-layout-aside ${asideBorder ? 'border' : ''} ${
            collapsed ? 'collapsed' : ''
          }`}
          style={{ width: collapsed ? 0 : asideWidthValue }}
        >
          <div className="sp-layout-aside_wrapper">
            <div className="sp-layout-aside_wrapper_content">{aside}</div>
            {isCanCollapse && (
              <div
                className="sp-layout-aside_wrapper_collapse"
                title={`${collapsed ? '展开' : '收起'}侧边栏`}
                onClick={handleCollapse}
              >
                {collapsed ? <IconRight /> : <IconLeft />}
              </div>
            )}
          </div>
        </div>
      )}
      <main className="sp-layout-main">{children}</main>
      {mode.includes('F') && footer && (
        <footer className="sp-layout-footer">{footer}</footer>
      )}
    </div>
  )
}

export default Layout
