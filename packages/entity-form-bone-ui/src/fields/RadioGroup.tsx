import React, { FC } from 'react'
import { RegisterFieldProps } from 'entity-form'
import { RadioGroup as BoneRadioGroup, Radio } from '@bone-ui/radio'
import { FormField } from '@bone-ui/form-field'

export const RadioGroup: FC<RegisterFieldProps> = ({ field, result, name }) => {
  const { label } = field
  const { handlerBuilder } = result
  const error = result.helpers.getError(name)
  const value = result.helpers.getValue(name)
  const options = typeof field.enum === 'function' ? field.enum() : field.enum

  return (
    <FormField error={error} label={label}>
      <BoneRadioGroup value={value} onChange={handlerBuilder.createChangeHandler(name)}>
        {options?.map((item) => (
          <Radio key={item.value} value={item.value}>
            {item.value}
          </Radio>
        ))}
      </BoneRadioGroup>
    </FormField>
  )
}
