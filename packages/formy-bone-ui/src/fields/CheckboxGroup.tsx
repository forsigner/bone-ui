import React, { FC } from 'react'
import { FieldRegisterProps } from '@formy/react'
import { CheckboxGroup as G, Checkbox } from '@bone-ui/checkbox'
import { FormField } from '@bone-ui/form-field'

const BoneCheckboxGroup: any = G // TODO:

export const CheckboxGroup: FC<FieldRegisterProps> = (props) => {
  const { value, error, label, options = [] } = props

  return (
    <FormField error={error} label={label}>
      <BoneCheckboxGroup value={value} onChange={props.handleChange}>
        {options.map((item) => (
          <Checkbox key={item.value} value={item.value}>
            {item.label}
          </Checkbox>
        ))}
      </BoneCheckboxGroup>
    </FormField>
  )
}
