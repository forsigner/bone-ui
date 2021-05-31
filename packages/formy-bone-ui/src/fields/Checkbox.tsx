import React, { ChangeEvent, FC } from 'react'
import { FieldRegisterProps } from '@formy/react'
import { Checkbox as BoneCheckbox } from '@bone-ui/checkbox'
import { FormField } from '@bone-ui/form-field'

export const Checkbox: FC<FieldRegisterProps> = (props) => {
  const { value, error, label } = props

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    props.handleChange(e.target.checked)
  }

  return (
    <FormField error={error} label={label}>
      <BoneCheckbox checked={value} onChange={handleChange}></BoneCheckbox>
    </FormField>
  )
}
