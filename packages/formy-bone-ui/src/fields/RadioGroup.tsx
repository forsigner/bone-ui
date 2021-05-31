import React, { FC } from 'react'
import { FieldRegisterProps } from '@formy/react'
import { RadioGroup as G, Radio } from '@bone-ui/radio'
import { FormField } from '@bone-ui/form-field'

const BoneRadioGroup: any= G // TODO: 

export const RadioGroup: FC<FieldRegisterProps> = (props) => {
  const { value, error, label, options } = props

  return (
    <FormField error={error} label={label}>
      <BoneRadioGroup value={value} onChange={props.handleChange}>
        {options?.map((item) => (
          <Radio key={item.value} value={item.value}>
            {item.value}
          </Radio>
        ))}
      </BoneRadioGroup>
    </FormField>
  )
}
