import React, { FC } from 'react'
import { RegisterFieldProps } from 'entity-form'
import { Input as BoneInput } from '@bone-ui/input'
import { FormField } from '@bone-ui/form-field'

export const Input: FC<RegisterFieldProps> = ({ field, result, name }) => {
  const { componentProps = {}, label, type } = field
  const { handlerBuilder } = result
  const error = result.helpers.getError(name)
  const value = result.helpers.getValue(name)

  return (
    <FormField error={error} label={label}>
      <BoneInput
        {...componentProps}
        type={type || componentProps.type || 'text'}
        value={value}
        onChange={handlerBuilder.createChangeHandler(name)}
      />
    </FormField>
  )
}
