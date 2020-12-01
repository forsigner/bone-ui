import React, { FC } from 'react'
import { RegisterFieldProps } from 'entity-form'
import { CheckboxGroup as BoneCheckboxGroup, Checkbox } from '@bone-ui/checkbox'
import { FormField } from '@bone-ui/form-field'

export const CheckboxGroup: FC<RegisterFieldProps> = ({ field, result, name }) => {
  const { label } = field
  const { handlerBuilder } = result
  const error = result.helpers.getError(name)
  const value = result.helpers.getValue(name)
  const options = typeof field.enum === 'function' ? field.enum() : field.enum

  return (
    <FormField error={error} label={label}>
      <BoneCheckboxGroup value={value} onChange={handlerBuilder.createChangeHandler(name)}>
        {options?.map((item) => (
          <Checkbox key={item.value} value={item.value}>
            {item.label}
          </Checkbox>
        ))}
      </BoneCheckboxGroup>
    </FormField>
  )
}
