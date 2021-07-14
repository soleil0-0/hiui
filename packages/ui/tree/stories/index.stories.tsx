import React from 'react'

export * from './basic.stories'
export * from './draggable.stories'
export * from './dynamic.stories'

export default {
  title: 'Tree',
  decorators: [(story: Function) => <div>{story()}</div>],
}