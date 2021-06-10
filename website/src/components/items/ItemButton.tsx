import React from 'react'
import { Box } from '@fower/react'
import { Switch } from '@bone-ui/switch'
import { Button } from '@bone-ui/button'

export function ItemButton(props: any) {
  return (
    <Box toEvenly {...props}>
      <Button>Hello</Button>
    </Box>
  )
}
