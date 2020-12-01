import React, { ChangeEvent, FC } from 'react'
import { RegisterFieldProps } from 'entity-form'
import { Checkbox as BoneCheckbox } from '@bone-ui/checkbox'
import { FormField } from '@bone-ui/form-field'

export const Checkbox: FC<RegisterFieldProps> = ({ field, result, name }) => {
  const { label } = field
  const { handlerBuilder } = result
  const error = result.helpers.getError(name)
  const value = result.helpers.getValue(name)

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    console.log('e.target.checked:', e.target.checked)
    handlerBuilder.createChangeHandler(name)(e.target.checked)
  }

  return (
    <FormField error={error} label={label}>
      <BoneCheckbox checked={value} onChange={handleChange}></BoneCheckbox>
    </FormField>
  )
}
