import React, { FC } from 'react'
import { FieldRegisterProps } from '@formy/react'
import { Select as BoneSelect } from '@bone-ui/select'
import { FormField } from '@bone-ui/form-field'

export const Select: FC<FieldRegisterProps> = (props) => {
  const { value, error, label, componentProps, options } = props

  return (
    <FormField error={error} label={label}>
      <BoneSelect
        {...componentProps}
        options={options}
        value={value}
        onChange={props.handleChange}
      ></BoneSelect>
    </FormField>
  )
}
