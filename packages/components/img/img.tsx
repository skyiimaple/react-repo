/**
 * @Author: suzifeng
 * @Date: 2026-03-10
 * @Description: img组件
 */
import React, { useEffect, useRef, useState, ReactNode } from 'react'
import Viewer from 'viewerjs'
import 'viewerjs/dist/viewer.css'
import './img.scss'

export interface ImageProps {
  /**
   * @description: 是否开启预览
   */
  preview?: boolean
  /**
   * @description: 图片地址
   */
  src?: string
  /**
   * @description: 加载错误时的图片地址
   */
  errorSrc?: string
  /**
   * @description: alt
   */
  alt?: string
  /**
   * @description: 传给img的属性
   */
  imgProps?: Record<string, any>
  /**
   * @description: 自定义渲染
   */
  children?: (props: {
    show: () => void
    viewer: Viewer | null
    error: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void
  }) => ReactNode
  /**
   * @description: 错误回调
   */
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void
}

const Image: React.FC<ImageProps> = ({
  preview = false,
  src = '',
  errorSrc = 'data:image/png;base64,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',
  alt,
  imgProps,
  children,
  onError,
}) => {
  const imgWrapperRef = useRef<HTMLDivElement>(null)
  const [viewer, setViewer] = useState<Viewer | null>(null)

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = e.target as HTMLImageElement
    if (img && errorSrc) {
      img.src = errorSrc
    }
    onError?.(e)
  }

  const show = () => {
    if (viewer) {
      viewer.show()
    }
  }

  useEffect(() => {
    if (imgWrapperRef.current && preview) {
      const viewerInstance = new Viewer(imgWrapperRef.current)
      setViewer(viewerInstance)
      return () => {
        viewerInstance.destroy()
      }
    }
  }, [preview])

  if (children) {
    return (
      <div ref={imgWrapperRef} className={`sp-img ${preview ? 'preview' : ''}`}>
        {children({ show, viewer, error: handleError })}
      </div>
    )
  }

  return (
    <div ref={imgWrapperRef} className={`sp-img ${preview ? 'preview' : ''}`}>
      <img src={src} alt={alt} onError={handleError} {...imgProps} />
    </div>
  )
}

export default Image
