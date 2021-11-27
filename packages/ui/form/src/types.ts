import { RuleItem } from 'async-validator'
export interface FormState<T> {
  /**
   * 字段及值的映射存储
   */
  values: T
  /**
   * 字段及错误文案的映射存储
   */
  errors: FormErrors<T>
  /**
   * 字段及是否触摸布尔值的映射存储
   */
  touched: FormTouched<T>
  /**
   * 是否正在校验中
   */
  validating: boolean
  /**
   * 是否正在提交中
   */
  submitting?: boolean
}

export type FormTouched<T = any> = Record<string, T>
export type FormErrors<T = any> = Record<string, T>

export type FormSetState<T> =
  | Partial<FormState<T>>
  | ((state: FormState<T>) => Partial<FormState<T>>)

export type FormAction<T> =
  | { type: 'SUBMIT_ATTEMPT' }
  | { type: 'SUBMIT_DONE' }
  | { type: 'SET_VALIDATING'; payload: boolean }
  | { type: 'SET_SUBMITTING'; payload: boolean }
  | { type: 'SET_VALUES'; payload: T }
  | { type: 'SET_FIELD_VALUE'; payload: { field: string; value?: any } }
  | { type: 'SET_FIELD_TOUCHED'; payload: { field: string; value?: boolean } }
  | { type: 'SET_FIELD_ERROR'; payload: { field: string; value?: string } }
  | { type: 'SET_TOUCHED'; payload: FormTouched<T> }
  | { type: 'SET_ERRORS'; payload: FormErrors<T> }
  | { type: 'SET_STATUS'; payload: any }
  | { type: 'SET_FORM'; payload: FormState<T> }
  | { type: 'SET_STATE'; payload: FormSetState<T> }

export type FormValidateFunction<T = any> = (value: T) => string | Promise<string> | undefined

export interface FormFieldCollection<T> {
  validate: (value: any) => Promise<T>
}

// export interface FormRuleModel<T = any> {
//   trigger?: 'onChange' | 'onBlur' | 'none'
//   name?: string
//   strategy?: T
//   validator?: FormValidateFunction
//   message?: string
//   transform?: (v: T) => any
// }

export type FormRuleModel<T = any> = RuleItem

export type FormRuleType =
  | 'string'
  | 'number'
  | 'boolean'
  | 'method'
  | 'regexp'
  | 'integer'
  | 'float'
  | 'array'
  | 'object'
  | 'enum'
  | 'date'
  | 'url'
  | 'hex'
  | 'email'
  | 'any'

// export type FormRuleName = 'required' | 'email'

export interface FormHelpers<T = any> {
  validate: FormValidateFunction<T>
  /**
   * 对整个表单进行校验, 对应 Form.Submit中的 API
   */
  submit?: () => Promise<any>
  /**
   * 重置整个表单的验证,对应 Form.Reset中的 API
   */
  reset?: (fields: [], toDefault: boolean) => Promise<any>
  /**
   * 对指定表单字段进行校验
   */
  validateFields?: (fields?: string[] | string) => Promise<any>
  /**
   * 设置表单的值，在异步获取的数据回显的时候，使用该方法
   */
  setFieldsValue?: (field: string, value: any) => void
  /**
   * 	获取一组字段名对应的 Values 返回为数组形式, 不传入 fields；默认返回全部信息, 不会触发表单校验
   */
  getFieldsValue?: (field: string) => any
  /**
   * 获取一组字段名对应的错误信息，返回为数组形式, 不传入 fields；默认返回全部信息
   */
  getFieldsError?: (field: string) => any
  /**
   * 移除表单项的校验结果。传入待移除的表单项的 field 属性组成的数组，如不传则移除整个表单的校验结果
   */
  clearValidates?: (fields: string[]) => void
}

export type FormFieldPath = string | string[]
// TODO: 支持数组获取对象嵌套属性
//  | string[]

export type FormErrorMessage = string