import React, { FC } from 'react'
import { FieldRegisterProps } from '@formy/react'
import { Input as I } from '@bone-ui/input'
import { FormField } from '@bone-ui/form-field'

const BoneInput: any = I

export const Input: FC<FieldRegisterProps> = (props) => {
  const { value, error, label, componentProps } = props

  return (
    <FormField error={error} label={label}>
      <BoneInput
        placeholder={componentProps.placeholder}
        type={componentProps.type || 'text'}
        value={value}
        onChange={props.handleChange}
      />
    </FormField>
  )
}
