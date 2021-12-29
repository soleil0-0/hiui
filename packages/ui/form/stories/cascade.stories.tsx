/* eslint-disable node/no-callback-literal */
import React from 'react'
import Form, { FormHelpers, FormItem, FormReset, FormSubmit } from '../src'
import Button from '@hi-ui/button'
import message from '@hi-ui/message'
import Select from '@hi-ui/select'
import { Counter } from '@hi-ui/counter'
import Checkbox, { CheckboxGroup } from '@hi-ui/checkbox'
import { DatePicker } from '@hi-ui/date-picker'
import { Cascader } from '@hi-ui/cascader'
import { RadioGroup, Radio } from '@hi-ui/radio'
import { Switch } from '@hi-ui/switch'
import { Rating } from '@hi-ui/rating'
import { Upload } from '@hi-ui/upload'

export const Cascade = () => {
  const formRef = React.useRef<FormHelpers>(null)
  const [formData, setFormData] = React.useState<any>({
    controlCounter: 'show',
    select: '3',
    counter: 3,
    radio: 0,
    rating: 3,
    checkbox: [],
    switch: false,
  })

  return (
    <>
      <h1>表单级联</h1>
      <div className="form-cascade__wrap" style={{ width: 400 }}>
        <Form
          labelWidth="140"
          labelPlacement="right"
          innerRef={formRef}
          initialValues={formData}
          onValuesChange={(changedValues, allValues) => {
            console.log('changedValues,allValues', changedValues, allValues)
            setFormData(allValues)
          }}
        >
          <FormItem label="表单名称" field={null} valueType={null}>
            <>动态表单</>
          </FormItem>
          <FormItem label="控制Counter" field="controlCounter" valueType="string">
            <Select
              clearable={false}
              style={{ width: 300 }}
              data={[
                {
                  id: 'hide',
                  title: '隐藏Counter',
                },
                {
                  id: 'show',
                  title: '显示Counter',
                },
              ]}
              placeholder="控制Counter的显示隐藏"
              onChange={(ids) => {
                console.log('select ids', ids)
              }}
            />
          </FormItem>

          {formData.controlCounter === 'show' ? (
            <FormItem label="Counter" field="counter" required valueType="number">
              <Counter step={1} min={-10} max={10} />
            </FormItem>
          ) : null}

          <FormItem
            label="Checkbox"
            field="checkbox"
            rules={[
              {
                trigger: 'onChange',
                type: 'array',
                required: true,
              },
            ]}
            valueType="string"
          >
            <CheckboxGroup onChange={(data) => console.log('Checkbox data', data)}>
              <Checkbox value="DatePicker">DatePicker</Checkbox>
              <Checkbox value="Cascader">Cascader</Checkbox>
              <Checkbox value="Radio">Radio</Checkbox>
            </CheckboxGroup>
          </FormItem>

          {formData.checkbox.includes('DatePicker') && (
            <FormItem label="DatePicker" field="datePicker" required={true} valueType="array">
              <DatePicker
                type="daterange"
                onChange={(date, dateStr) => {
                  console.log('onChange DatePicker', date, dateStr)
                }}
              />
            </FormItem>
          )}
          {/* TODO: 动态切换时，是否移除脏数据，但是初始数据必然有额外数据，移除同名字段数据显然不合理 */}
          {formData.checkbox.includes('Cascader') && (
            <FormItem label="Cascader" field="Cascader" valueType="string">
              <Cascader
                onChange={(id) => {
                  console.log('Cascader change id', id)
                }}
                data={[
                  {
                    id: '手机',
                    title: '手机',
                    children: [
                      {
                        id: '小米',
                        title: '小米',
                        children: [
                          {
                            id: '小米3',
                            title: '小米3',
                          },
                          {
                            id: '小米4',
                            title: '小米4',
                          },
                        ],
                      },
                      {
                        id: '红米',
                        title: '红米',
                        children: [
                          {
                            id: '红米3',
                            title: '红米3',
                          },
                          {
                            id: '红米4',
                            title: '红米4',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: '电视',
                    title: '电视',
                    children: [
                      {
                        id: '小米电视4A',
                        title: '小米电视4A',
                      },
                      {
                        id: '小米电视4C',
                        title: '小米电视4C',
                      },
                    ],
                  },
                ]}
                style={{ width: 300 }}
              />
            </FormItem>
          )}
          {formData.checkbox.includes('Radio') && (
            <FormItem label="Radio" field="radio" valueType="string">
              <RadioGroup onChange={(data) => console.log('radio data', data)}>
                <Radio value={0}>手机类</Radio>
                <Radio value={1}>电脑类</Radio>
                <Radio value={2}>生活类</Radio>
              </RadioGroup>
            </FormItem>
          )}

          <FormItem label="Switch" field="switch" valueType="boolean">
            <Switch content={['ON', 'OFF']} onChange={(val) => console.log('change Switch', val)} />
          </FormItem>

          <FormItem label="Rating" field="rating" valueType="number">
            <Rating />
          </FormItem>
          <FormItem label="Upload" field="upload" valueType="string">
            <Upload
              type="photo"
              uploadAction="http://www.mocky.io/v2/5dc3b4413000007600347501"
              onChange={(file, fileList, response) => {
                file.id = 'file唯一标识'
                console.log('upload callback', file, fileList, response)
              }}
              onRemove={(file, fileList, index) => {
                console.log('remove callback', file, fileList, index)
                return new Promise((resolve, reject) => resolve(true))
              }}
              params={{ id: 'uid', channel: 'youpin' }}
              name={'files[]'}
              defaultFileList={[
                {
                  name: 'b.png',
                  fileType: 'img',
                  uploadState: 'success',
                  url: 'https://i1.mifile.cn/f/i/2018/mix3/specs_black.png',
                },
              ]}
            />
          </FormItem>

          <FormItem field={null} valueType={null}>
            <>
              <FormSubmit
                type="primary"
                onClick={(_, errors) => {
                  // console.log('Get form value:', values, errors)
                  const values = formRef.current.getFieldsValue()
                  message.open({
                    title: (
                      <div style={{ width: 400, wordBreak: 'break-all' }}>
                        {JSON.stringify(values)}
                      </div>
                    ),
                  })
                }}
              >
                提交
              </FormSubmit>

              <FormReset
                onClick={() => {
                  console.log('reset form')
                }}
              >
                重置
              </FormReset>

              <Button
                type="primary"
                appearance="link"
                onClick={() => {
                  console.log('填充表单')

                  formRef.current.setFieldsValue({
                    select: '2',
                    phone: '15666666666',
                    radio: 0,
                    rating: 4,
                    counter: 0,
                    switch: false,
                    datePicker: { start: new Date(), end: new Date() },
                    checkbox: ['Phone', 'Computer'],
                    cascader: ['电视', '小米电视4C'],
                  })
                }}
              >
                fill Form
              </Button>
            </>
          </FormItem>
        </Form>
      </div>
    </>
  )
}
