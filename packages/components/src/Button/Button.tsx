import React from 'react';
import { Button as AntdButton, ButtonProps as AntdButtonProps, ConfigProvider } from 'antd';
import { defaultTheme } from '../theme';

export interface ButtonProps extends AntdButtonProps {
  /**
   * 是否使用项目自定义主题
   * @default true
   */
  useProjectTheme?: boolean;
}

/**
 * 二次封装的 Button 组件
 * 继承 antd Button 的所有原生属性和功能
 * 支持项目自定义的主题配置
 */
export const Button: React.FC<ButtonProps> = ({
  useProjectTheme = true,
  children,
  ...props
}) => {
  const buttonContent = (
    <AntdButton {...props}>
      {children}
    </AntdButton>
  );

  if (useProjectTheme) {
    return (
      <ConfigProvider theme={defaultTheme}>
        {buttonContent}
      </ConfigProvider>
    );
  }

  return buttonContent;
};

Button.displayName = 'MyButton';
