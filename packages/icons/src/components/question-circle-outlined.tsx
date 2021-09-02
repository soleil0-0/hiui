
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../@types/props'

const _role = 'icon-question-circle-outlined'
const _prefix = getPrefixCls(_role)

export const QuestionCircleOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M512 64c247.424 0 448 200.576 448 448S759.424 960 512 960 64 759.424 64 512 264.576 64 512 64z m0 80C308.76 144 144 308.76 144 512s164.76 368 368 368 368-164.76 368-368S715.24 144 512 144zM545.3 626.04v-11.56c0-17 3.4-31.96 10.88-45.56 6.12-12.24 15.64-23.8 27.88-34.68 32.64-27.88 51.68-45.56 57.8-53.04 16.32-21.76 25.16-49.64 25.16-82.96 0-40.8-13.6-73.44-40.12-97.24-27.2-24.48-62.56-36.04-106.76-36.04-49.64 0-89.08 14.28-117.64 43.52-29.24 28.56-43.52 67.32-43.52 116.96h72.08c0-29.92 6.12-53.72 18.36-70.04 13.6-19.04 36.04-28.56 66.64-28.56 24.48 0 43.52 6.8 57.12 20.4 12.92 13.6 19.72 31.96 19.72 55.76 0 17.68-6.12 34-18.36 49.64l-11.56 12.92c-42.16 37.4-68 65.28-77.52 84.32-8.84 17.68-12.92 39.44-12.92 64.6v11.56h72.76zM512 704m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z" p-id="13335"></path></svg>
    )
  }
)

if (__DEV__) {
  QuestionCircleOutlined.displayName = 'QuestionCircleOutlined'
}
  