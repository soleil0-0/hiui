import React from 'react'
import Dropdown from '../src'
import { Tooltip } from '@hi-ui/tooltip'
import Button from '@hi-ui/button'

export const TriggerButton = () => {
  const [list] = React.useState([
    {
      id: 0,
      title: '小米商城',
      href: 'https://www.mi.com',
    },
    {
      id: 1,
      title: '菜单二',
    },
    {
      id: 2,
      title: '菜单三',
    },
    {
      id: 3,
      title: '菜单四',
    },
    {
      id: 4,
      title: '菜单五',
    },
    {
      id: 5,
      title: '菜单六',
    },
    {
      id: 6,
      title: '菜单七',
    },
    {
      id: 7,
      title: '-',
    },
    {
      id: 8,
      title: '小米商城',
      href: 'https://www.mi.com',
      disabled: true,
    },
  ])

  return (
    <>
      <h1>TriggerButton</h1>
      <div className="dropdown-trigger-button__wrap">
        <Dropdown
          data={list}
          title="鼠标悬停"
          onClick={console.log}
          triggerButton={
            <span>
              <Tooltip title="Dropdown 触发的事件传给 tooltip 不会影响 button 哦">
                <Button>自定义触发器</Button>
              </Tooltip>
            </span>
          }
        />
      </div>
    </>
  )
}