import { registerField, registerForm } from 'entity-form'
import { Form } from './Form'
import { Input } from './fields/Input'
import { Textarea } from './fields/Textarea'
import { RadioGroup } from './fields/RadioGroup'
import { Checkbox } from './fields/Checkbox'
import { CheckboxGroup } from './fields/CheckboxGroup'

export function registerAll() {
  registerForm(Form)

  // 注册表单控件
  registerField('Input', Input)
  registerField('Checkbox', Checkbox)
  registerField('RadioGroup', RadioGroup)
  registerField('CheckboxGroup', CheckboxGroup)
  registerField('Textarea', Textarea)
}
