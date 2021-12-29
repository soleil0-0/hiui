import React, { useMemo } from 'react'
import { cx } from '@hi-ui/classname'
import { CloseCircleFilled, TimeOutlined, StartDateOutlined } from '@hi-ui/icons'
import { DatePickerType } from '../types'

const PickerIcon = ({
  focus,
  type,
  clearable,
  showTime,
  disabled,
  onClick,
}: {
  focus: boolean
  clearable?: boolean
  showTime: boolean
  disabled?: boolean
  type: DatePickerType
  onClick: (status: boolean) => void
}) => {
  const cls = cx(
    'hi-icon',
    disabled && 'hi-icon--disabled',
    focus && clearable
      ? 'icon-close-circle clear'
      : type.includes('time') || showTime
      ? 'icon-time'
      : 'icon-date'
  )
  const MatchIcon = useMemo(() => {
    if (focus && clearable) {
      return CloseCircleFilled
    } else if (type.includes('time') || showTime) {
      return TimeOutlined
    } else {
      return StartDateOutlined
    }
  }, [clearable, focus, showTime, type])

  return (
    <MatchIcon
      className={cls}
      onClick={(e) => {
        if (disabled) return
        onClick(!!(focus && clearable))
      }}
    />
  )
}

export default PickerIcon