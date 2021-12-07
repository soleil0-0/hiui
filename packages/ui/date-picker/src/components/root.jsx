import React, { useRef, useContext, useEffect, useState } from 'react'
import { cx } from '@hi-ui/classname'
import Input from './input'
import PickerIcon from './picker-icon'
import DPContext from '../context'
import usePlaceholder from '../hooks/usePlaceholders'
import { parseValue } from '../utils'

const Root = ({
  onTrigger,
  onMouseEnter,
  onMouseLeave,
  children,
  inputChangeEvent,
  onClear,
  inputFocus,
  rangeInputIsError,
  setAttachEl,
}) => {
  const {
    localeDatas,
    type,
    outDate,
    placeholder,
    showTime,
    disabled,
    clearable,
    theme,
    width,
    value,
    format,
    bordered,
    locale,
    prefixCls,
  } = useContext(DPContext)
  const [inputData, setInputData] = useState(outDate)

  const placeholders = usePlaceholder({
    type,
    showTime,
    placeholder,
    localeDatas,
  })
  useEffect(() => {
    setInputData(value ? parseValue(value, type, format, locale) : outDate)
  }, [outDate, value])
  const onPickerClickEvent = () => {
    onTrigger()
  }

  const pickerIconClick = (isClear) => {
    if (isClear) {
      onClear()
      return
    }
    onPickerClickEvent()
  }
  const _cls = cx(
    `${prefixCls}__picker`,
    `theme__${theme}`,
    `${prefixCls}__picker--${type}`,
    inputFocus && `${prefixCls}__picker--focus`,
    disabled && `${prefixCls}__picker--disabled`,
    showTime && `${prefixCls}__picker--hastime`,
    rangeInputIsError && `${prefixCls}__picker--error`,
    { bordered }
  )

  const renderRange = type.includes('range') || type === 'timeperiod'

  return (
    <div
      className={_cls}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={setAttachEl}
      style={{ width: width }}
    >
      <div className={`${prefixCls}__input`} style={{ width: width }}>
        <Input
          date={inputData[0]}
          placeholder={placeholders[0]}
          onChange={inputChangeEvent}
          onFocus={onPickerClickEvent}
          dir={0}
        />
        {renderRange && (
          <React.Fragment>
            <span className={`${prefixCls}__input--connection`}>{localeDatas.datePicker.to}</span>
            <Input
              date={inputData[1]}
              placeholder={placeholders[1]}
              onChange={inputChangeEvent}
              onFocus={onPickerClickEvent}
              dir={1}
            />
          </React.Fragment>
        )}
        <PickerIcon
          focus={inputFocus}
          type={type}
          showTime={showTime}
          disabled={disabled}
          clearable={clearable}
          onClick={pickerIconClick}
        />
      </div>
    </div>
  )
}

export default Root