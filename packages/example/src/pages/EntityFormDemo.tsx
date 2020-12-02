import React from 'react'
import { IsNotEmpty, ArrayNotEmpty } from 'class-validator'
import { entity, field, EntityForm, Field } from 'entity-form'
import { registerAll } from 'entity-form-bone-ui'
import { Button } from '@bone-ui/button'
import { Box } from '@styli/react'

registerAll()

@entity('user-entity')
export class User {
  @field({
    value: '',
    label: '用户名',
    component: 'Input',
  })
  @IsNotEmpty({ message: 'user name required' })
  username = ''

  @field({
    value: '',
    label: 'Email',
    component: 'Input',
  })
  @IsNotEmpty({ message: '' })
  email = ''

  @field({
    label: 'Agree',
    value: true,
    component: 'Checkbox',
  })
  agree = true

  @field({
    label: 'Enabled?',
    value: true,
    component: 'Switch',
  })
  enabled = true

  @field({
    label: 'Color',
    value: 'red',
    component: 'RadioGroup',
    enum: [
      { label: 'red', value: 'red' },
      { label: 'green', value: 'green' },
      { label: 'blue', value: 'blue' },
    ],
  })
  color = ''

  @ArrayNotEmpty()
  @field({
    label: 'Colors',
    value: ['green'],
    component: 'CheckboxGroup',
    enum: [
      { label: '红色', value: 'red' },
      { label: 'green', value: 'green' },
      { label: 'blue', value: 'blue' },
    ],
  })
  colors = ''

  @IsNotEmpty()
  @field({
    label: 'Intro',
    value: '',
    component: 'Textarea',
  })
  intro = ''

  onSubmit(values: User) {
    alert(JSON.stringify(values, null, 2))
  }
}

export default () => {
  return (
    <div>
      <Box as="h2">Form</Box>
      <EntityForm entity={User}>
        <Field name="username" />
        <Field name="email" />
        <Field name="enabled" />
        <Field name="color" />
        <Field name="colors" />
        <Field name="intro" />
        <Field name="agree" />
        <Button ml-80 type="submit">
          Submit
        </Button>
      </EntityForm>
    </div>
  )
}
