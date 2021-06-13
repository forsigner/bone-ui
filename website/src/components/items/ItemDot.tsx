import React from 'react'
import { Box } from '@fower/react'
import { Dot } from '@bone-ui/dot'

export function ItemDot(props: any) {
  return (
    <Box toEvenly toCenterY black {...props}>
      <Dot type="error">Error</Dot>
      <Dot type="info">Info</Dot>
      <Dot type="success">Success</Dot>
    </Box>
  )
}
