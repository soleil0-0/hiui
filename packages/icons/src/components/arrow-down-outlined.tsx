
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../@types/props'

const _role = 'icon-arrow-down-outlined'
const _prefix = getPrefixCls(_role)

export const ArrowDownOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M811.892 589.736L517.736 883.892a8 8 0 0 1-11.026 0.274l-0.288-0.274-294.158-294.156a8 8 0 0 1 0-11.314l45.256-45.256a8 8 0 0 1 11.314 0l203.244 203.244V146.08a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8v590.332l203.244-203.244a8 8 0 0 1 11.314 0l45.256 45.256a8 8 0 0 1 0 11.314z" p-id="13825"></path></svg>
    )
  }
)

if (__DEV__) {
  ArrowDownOutlined.displayName = 'ArrowDownOutlined'
}
  