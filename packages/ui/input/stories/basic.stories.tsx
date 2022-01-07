import React from 'react'
import Input from '../src'

export const Basic = () => {
  return (
    <>
      <h1>Basic for Input</h1>
      <div className="input-basic__wrap">
        <Input placeholder="请输入" onChange={(e, t) => console.log(e.target.value, t)} />
        <br />
        <input placeholder="请输入" onChange={(e) => console.log(e.target.value)}></input>
      </div>
    </>
  )
}
