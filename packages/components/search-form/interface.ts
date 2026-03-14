// 根据 type 映射到对应的组件属性类型
// 由于 Arco Design React 没有直接导出组件 Props 类型，这里使用 Record<string, any> 作为基础

import { ReactNode } from 'react'

// 用户可以通过类型断言来获得更好的类型提示
export type ComponentPropsMap = {
  input: Record<string, any>
  'input-number': Record<string, any>
  'input-tag': Record<string, any>
  select: Record<string, any>
  date: Record<string, any>
  'date-range': Record<string, any>
  radio: Record<string, any>
  checkbox: Record<string, any>
  switch: Record<string, any>
  'tree-select': Record<string, any>
  custom: Record<string, any>
}

// 根据 SearchField['type'] 推断 mixProps 类型
export type mixProps<
  T extends SearchFormField['type'] = SearchFormField['type'],
> = T

export interface SearchFormField {
  /**
   * @description: 控件名称
   */
  name?: string
  /**
   * @description: 控件类型
   */
  type:
    | 'input'
    | 'input-number'
    | 'select'
    | 'date'
    | 'date-range'
    | 'radio'
    | 'checkbox'
    | 'switch'
    | 'tree-select'
    | 'custom'
  /**
   * @description: 字段选项
   */
  options?: any[]
  /**
   * @description: 字段值
   */
  value?: any
  /**
   * @description: 占位符
   */
  placeholder?: string
  /**
   * @description: 标签
   */
  label?: string
  /**
   * @description: 标签插槽
   */
  labelSlot?: (
    label: SearchFormField['label'],
    props?: Record<string, any>,
  ) => ReactNode
  /**
   * @description: 字段属性
   */
  fieldProps?: Partial<ComponentPropsMap[SearchFormField['type']]>
  /**
   * @description: 控件插槽
   */
  defaultSlot?: (
    value: SearchFormField['value'],
    props?: Record<string, any>,
    onChange?: (value: any) => void,
  ) => ReactNode
  /**
   * 是否做为simple模式的控件被传送
   */
  teleport?: boolean
  /**
   * 控件的labelCol
   */
  labelCol?: Record<string, any>
  /**
   * 控件的wrapperCol
   */
  wrapperCol?: Record<string, any>
  /**
   * @description: 值改变回调
   */
  onChange?: (value: SearchFormField['value']) => void
}

export type SearchFormFields = {
  [key in Exclude<SearchFormField['name'], undefined>]: SearchFormField
}

/**
 * @description SearchFormProps
 */
export interface SearchFormProps {
  modelValue?: Record<string, any>
  fields?: SearchFormFields
  /**
   * @description 栅格化列设置
   */
  fieldSpanMap?: {
    xs: number
    sm: number
    md: number
    xl: number
  }
  /**
   * @description 屏幕响应阈值
   */
  screenMediaMap?: {
    xs: number
    sm: number
    md: number
    xl: number
  }
  /**
   * @description 传给a-form的props
   */
  formProps?: Record<string, any>
  /**
   * @description 搜索回调
   */
  onSearch?: (value: Record<string, any>, formatValue: Record<string, any>) => void
  /**
   * @description 重置回调
   */
  onReset?: () => void
  /**
   * @description 值改变回调
   */
  onChange?: (value: any) => void
}

/**
 * @description SearchFormFieldProps
 */
export interface SearchFormFieldProps {
  /**
   * @description 表单数据
   */
  value?: SearchFormField['value']
  /**
   * @description 表单名称
   */
  name?: SearchFormField['name']
  /**
   * @description 表单类型
   */
  type?: SearchFormField['type']
  /**
   * @description 表单选项
   */
  options?: SearchFormField['options']
  /**
   * @description 表单占位符
   */
  placeholder?: SearchFormField['placeholder']
  /**
   * @description 表单标签
   */
  label?: SearchFormField['label']
  /**
   * @description 表单标签插槽
   */
  labelSlot?: SearchFormField['labelSlot']
  teleport?: SearchFormField['teleport']
  /**
   * @description label 标签布局
   */
  labelCol?: SearchFormField['labelCol']
  /**
   * @description 控件布局
   */
  wrapperCol?: SearchFormField['wrapperCol']
  fieldProps?: SearchFormField['fieldProps']
  /**
   * @description 值改变回调
   */
  onChange?: (value: any) => void
}
