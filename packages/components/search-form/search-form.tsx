/**
 * @Author: suzifeng
 * @Date: 2026-03-13
 * @Description: search-form组件
 */
import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from 'react'
import { Form, Grid, Button, Space } from '@arco-design/web-react'

const { Row, Col } = Grid
import { SearchFormProps } from './interface'
import SearchFormFieldComponent from './search-form-field'

const SearchForm: React.FC<SearchFormProps> = ({
  modelValue,
  fields,
  fieldSpanMap = { xs: 12, sm: 12, md: 8, xl: 6 },
  screenMediaMap = { xs: 980, sm: 1180, md: 1380, xl: 1580 },
  formProps,
  onSearch,
  onReset,
  onChange,
  children,
}) => {
  const [fieldSpan, setFieldSpan] = useState<number>(6)
  const [value, setValue] = useState<Record<string, any>>(modelValue || {})

  // 渲染字段节点
  const fieldNodes = useMemo(() => {
    const nodes: ReactNode[] = []
    const childrenArray = React.Children.toArray(children)

    // 处理插槽中的 SearchFormField
    childrenArray.forEach((child, index) => {
      if (
        React.isValidElement(child) &&
        child.type === SearchFormFieldComponent
      ) {
        const props = child.props as any
        if (props.value !== undefined && props.name) {
          setValue(prev => ({ ...prev, [props.name]: props.value }))
        }
        nodes.push(
          React.cloneElement(child, {
            key: props.name || index,
            value: value[props.name],
            onChange: (val: any) => {
              setValue(prev => ({ ...prev, [props.name]: val }))
              props.onChange?.(val)
              onChange?.(val)
            },
          }),
        )
      }
    })

    // 处理 fields 配置
    if (fields) {
      Object.entries(fields).forEach(([key, field]) => {
        const fieldName = field.name || key
        if (field.value !== undefined) {
          setValue(prev => ({ ...prev, [fieldName]: field.value }))
        }

        nodes.push(
          <SearchFormFieldComponent
            key={fieldName}
            name={fieldName}
            {...field}
            value={value[fieldName]}
            onChange={val => {
              setValue(prev => ({ ...prev, [fieldName]: val }))
              field.onChange?.(val)
              onChange?.(val)
            }}
          />,
        )
      })
    }

    return nodes
  }, [fields, children, value, onChange])

  // 窗口大小改变
  const resizeHandler = useCallback(() => {
    let currentMedia: 'xs' | 'sm' | 'md' | 'xl'
    if (window.innerWidth < screenMediaMap.xs) {
      currentMedia = 'xs'
    } else if (
      window.innerWidth >= screenMediaMap.xs &&
      window.innerWidth < screenMediaMap.sm
    ) {
      currentMedia = 'sm'
    } else if (
      window.innerWidth >= screenMediaMap.sm &&
      window.innerWidth < screenMediaMap.xl
    ) {
      currentMedia = 'md'
    } else {
      currentMedia = 'xl'
    }
    setFieldSpan(fieldSpanMap[currentMedia])
  }, [fieldSpanMap, screenMediaMap])

  useEffect(() => {
    window.addEventListener('resize', resizeHandler)
    resizeHandler()
    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [resizeHandler])

  const handleSearch = useCallback(() => {
    onSearch?.(value, value)
  }, [value, onSearch])

  const handleReset = useCallback(() => {
    setValue({})
    onReset?.()
  }, [onReset])

  return (
    <div className="sp-search-form">
      <Form {...formProps}>
        <Row gutter={16}>
          {fieldNodes.map((node, index) => (
            <Col key={index} span={fieldSpan}>
              {node}
            </Col>
          ))}
          <Col span={fieldSpan} style={{ textAlign: 'right' }}>
            <Form.Item>
              <Space align="end">
                <Button type="primary" onClick={handleSearch}>
                  查询
                </Button>
                <Button onClick={handleReset}>重置</Button>
              </Space>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default SearchForm
