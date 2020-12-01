import React, { FC } from 'react'
import { RegisterFieldProps } from 'entity-form'
import { Textarea as BoneTextarea } from '@bone-ui/textarea'
import { FormField } from '@bone-ui/form-field'

export const Textarea: FC<RegisterFieldProps> = ({ field, result, name }) => {
  const { componentProps = {}, label } = field
  const { handlerBuilder } = result
  const error = result.helpers.getError(name)
  const value = result.helpers.getValue(name)

  return (
    <FormField error={error} label={label}>
      <BoneTextarea
        {...componentProps}
        value={value}
        onChange={handlerBuilder.createChangeHandler(name)}
      ></BoneTextarea>
    </FormField>
  )
}
