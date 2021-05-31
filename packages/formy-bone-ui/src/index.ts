import { FormyPlugin } from '@formy/core'
import { Form } from './Form'
import { Input } from './fields/Input'
import { Textarea } from './fields/Textarea'
import { RadioGroup } from './fields/RadioGroup'
import { Checkbox } from './fields/Checkbox'
import { CheckboxGroup } from './fields/CheckboxGroup'
import { Switch } from './fields/Switch'
import { Select } from './fields/Select'

export const FormyBoneUI: FormyPlugin = {
  Fields: {
    Input,
    Checkbox,
    Switch,
    RadioGroup,
    CheckboxGroup,
    Textarea,
    Select,
  },
  Form,
}
export default FormyBoneUI
