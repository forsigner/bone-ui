import React, { ChangeEvent, FC } from 'react'
import { FieldRegisterProps } from '@formy/react'
import { Switch as BoneSwitch } from '@bone-ui/switch'
import { FormField } from '@bone-ui/form-field'

export const Switch: FC<FieldRegisterProps> = (props) => {
  const { value, error, label, componentProps } = props

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    props.handleChange(e.target.checked)
  }

  return (
    // <FormField error={error} my4>
    <FormField error={error}>
      <BoneSwitch {...componentProps} checked={value} onChange={handleChange}>
        {label}
      </BoneSwitch>
    </FormField>
  )
}
