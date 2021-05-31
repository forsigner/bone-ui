import React from 'react'
import { FormField } from '@bone-ui/form-field'
import { Input } from '@bone-ui/input'
import { Box } from '@fower/react'

export default function FormFieldDemo() {
  return (
    <Box p20>
      <FormField error="error">
        <Input placeholder="some..."></Input>
      </FormField>

      <FormField error="wrong">
        <Input placeholder="any..."></Input>
      </FormField>
    </Box>
  )
}
