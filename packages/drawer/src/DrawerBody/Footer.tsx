import React from 'react'
import { Box } from '@fower/react'

export const DrawerFooter = ({ footer }: any) => {
  if (typeof footer !== 'string') {
    return <>{footer}</>
  }

  return (
    <Box fixed bottom0 w-100p p-20>
      {footer}
    </Box>
  )
}
