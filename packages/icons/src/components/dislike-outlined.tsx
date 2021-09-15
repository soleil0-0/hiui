
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../@types/props'

const _role = 'icon-dislike-outlined'
const _prefix = getPrefixCls(_role)

export const DislikeOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M477.75 934.434c64.146 0 116.268-51.384 117.304-115.164l0.016-1.938v-135.99h232.62c7.836 0 15.644-0.92 23.264-2.74 53.176-12.694 86.176-65.606 74.364-118.684l-0.37-1.608L833.1 175.028c-10.656-44.466-50.188-75.96-95.872-76.584l-1.386-0.01H132c-8.836 0-16 7.15-16 15.97v479.102c0 8.82 7.164 15.97 16 15.97h136.434l82.138 223.58c19.228 60.372 63.71 101.378 127.178 101.378z m37.32-332.942v215.84c0 20.574-16.708 37.252-37.32 37.252-28.33 0-41.748-18.118-50.668-44.89l-0.27-0.83L348 594.338l-0.002-416.054h387.844a19.994 19.994 0 0 1 19.312 14.772l0.14 0.546 91.848 383.282c2.57 10.724-4.056 21.494-14.8 24.06-1.268 0.302-2.564 0.48-3.868 0.532l-0.784 0.016h-312.62zM268 529.626H196V178.284h71.998v351.34z" p-id="11305"></path></svg>
    )
  }
)

if (__DEV__) {
  DislikeOutlined.displayName = 'DislikeOutlined'
}
  