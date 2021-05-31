import React, { FC } from 'react'
import { FieldRegisterProps } from '@formy/react'
import { Textarea as T } from '@bone-ui/textarea'
import { FormField } from '@bone-ui/form-field'

const BoneTextarea: any = T

export const Textarea: FC<FieldRegisterProps> = (props) => {
  const { value, error, label, componentProps } = props

  return (
    <FormField error={error} label={label}>
      <BoneTextarea
        placeholder={componentProps.placeholder}
        value={value}
        onChange={props.handleChange}
      ></BoneTextarea>
    </FormField>
  )
}
