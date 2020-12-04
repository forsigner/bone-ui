import React from 'react'
import { Box } from '@styli/react'

export const DrawerFooter = ({ footer }: any) => {
  if (typeof footer !== 'string') {
    return <>{footer}</>
  }

  return (
    <Box fixed B-0 w-100p p-20>
      {footer}
    </Box>
  )
}
