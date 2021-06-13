import React from 'react'
import { Box } from '@fower/react'
import { MailSolid } from '@bone-ui/icons/lib/MailSolid'
import { Input, InputGroup, InputAddon, InputElement } from '@bone-ui/input'

export function ItemInput(props: any) {
  return (
    <Box toEvenly toCenterY black {...props}>
      <InputGroup>
        <InputElement>
          <MailSolid gray400 size={20} />
        </InputElement>
        <Input placeholder="email" />
      </InputGroup>
    </Box>
  )
}
