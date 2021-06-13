import React from 'react'
import { Box } from '@fower/react'
import { Alert } from '@bone-ui/alert'
import { Divider, DividerTitle } from '@bone-ui/divider'

export function ItemDivider(props: any) {
  return (
    <Box toEvenly toCenterY black {...props} bgRed100--L10>
      <Divider my4>
        <DividerTitle bgRed100--L10>INTRO</DividerTitle>
      </Divider>
    </Box>
  )
}
