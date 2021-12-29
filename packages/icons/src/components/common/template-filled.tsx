
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _role = 'icon-template-filled'
const _prefix = getPrefixCls(_role)

export const TemplateFilled = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M320 490.666667a85.333333 85.333333 0 0 1 85.333333 85.333333v256a85.333333 85.333333 0 0 1-85.333333 85.333333H192a85.333333 85.333333 0 0 1-85.333333-85.333333V576a85.333333 85.333333 0 0 1 85.333333-85.333333h128zM832 106.666667a85.333333 85.333333 0 0 1 85.333333 85.333333v640a85.333333 85.333333 0 0 1-85.333333 85.333333H576a85.333333 85.333333 0 0 1-85.333333-85.333333V192a85.333333 85.333333 0 0 1 85.333333-85.333333h256zM320 106.666667a85.333333 85.333333 0 0 1 85.333333 85.333333v128a85.333333 85.333333 0 0 1-85.333333 85.333333H192a85.333333 85.333333 0 0 1-85.333333-85.333333V192a85.333333 85.333333 0 0 1 85.333333-85.333333h128z" p-id="15421"></path></svg>
    )
  }
)

if (__DEV__) {
  TemplateFilled.displayName = 'TemplateFilled'
}
  