import React from 'react'
import { Box } from '@fower/react'
import { Switch } from '@bone-ui/switch'

export function ItemSwitch(props: any) {
  return (
    <Box toEvenly {...props}>
      <Switch defaultChecked={true} />
      <Switch />
    </Box>
  )
}
