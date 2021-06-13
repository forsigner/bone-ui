import React from 'react'
import { Box } from '@fower/react'
import { Alert } from '@bone-ui/alert'

export function ItemAlert(props: any) {
  return (
    <Box toEvenly toCenterY black {...props}>
      <Alert type="info" w-100p>
        A info alert
      </Alert>
    </Box>
  )
}
