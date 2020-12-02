import React, { ChangeEvent, FC } from 'react'
import { RegisterFieldProps } from 'entity-form'
import { Switch as BoneSwitch } from '@bone-ui/switch'
import { FormField } from '@bone-ui/form-field'

export const Switch: FC<RegisterFieldProps> = ({ field, result, name }) => {
  const { label } = field
  const { handlerBuilder } = result
  const error = result.helpers.getError(name)
  const value = result.helpers.getValue(name)

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    handlerBuilder.createChangeHandler(name)(e.target.checked)
  }

  return (
    <FormField error={error} label={label}>
      <BoneSwitch checked={value} onChange={handleChange}></BoneSwitch>
    </FormField>
  )
}
