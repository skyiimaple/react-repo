/**
 * @Author: suzifeng
 * @Date: 2026-03-13
 * @Description: search-field组件
 */
import React, { ReactNode } from 'react'
import {
  Form,
  Input,
  InputNumber,
  Select,
  DatePicker,
  Radio,
  Checkbox,
  Switch,
  TreeSelect,
} from '@arco-design/web-react'
import { SearchFormFieldProps } from './interface'

const SearchFormField: React.FC<SearchFormFieldProps> = ({
  value,
  name,
  type,
  options = [],
  placeholder,
  label,
  labelSlot,
  labelCol = { span: 6 },
  wrapperCol = { span: 18 },
  fieldProps,
  onChange,
  children,
}) => {
  const handleChange = (val: any) => {
    onChange?.(val)
  }

  const renderField = () => {
    if (type === 'custom') {
      if (typeof children === 'function') {
        return children({ value, props: fieldProps, onChange: handleChange })
      }
      return children
    }

    switch (type) {
      case 'input':
        return (
          <Input
            value={value}
            placeholder={placeholder}
            onChange={(val) => handleChange(val.trim())}
            {...fieldProps}
          />
        )
      case 'input-number':
        return (
          <InputNumber
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
            {...fieldProps}
          />
        )
      case 'select':
        return (
          <Select
            value={value}
            placeholder={placeholder}
            options={options}
            onChange={handleChange}
            {...fieldProps}
          />
        )
      case 'date':
        return (
          <DatePicker
            value={value}
            placeholder={placeholder}
            style={{ width: '100%' }}
            onChange={handleChange}
            {...fieldProps}
          />
        )
      case 'date-range':
        return (
          <DatePicker.RangePicker
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
            {...fieldProps}
          />
        )
      case 'radio':
        return (
          <Radio.Group value={value} onChange={handleChange} {...fieldProps}>
            {options.map((option: any) => (
              <Radio key={option.value} value={option.value}>
                {option.label}
              </Radio>
            ))}
          </Radio.Group>
        )
      case 'checkbox':
        return (
          <Checkbox.Group value={value} onChange={handleChange} {...fieldProps}>
            {options.map((option: any) => (
              <Checkbox key={option.value} value={option.value}>
                {option.label}
              </Checkbox>
            ))}
          </Checkbox.Group>
        )
      case 'switch':
        return (
          <Switch checked={value} onChange={handleChange} {...fieldProps} />
        )
      case 'tree-select':
        return (
          <TreeSelect
            value={value}
            placeholder={placeholder}
            treeData={options}
            onChange={handleChange}
            {...fieldProps}
          />
        )
      default:
        return null
    }
  }

  const labelContent = labelSlot ? labelSlot(label, fieldProps) : label

  return (
    <Form.Item
      labelCol={labelCol}
      wrapperCol={wrapperCol}
      label={labelContent}
      {...fieldProps}
    >
      {renderField()}
    </Form.Item>
  )
}

export default SearchFormField
