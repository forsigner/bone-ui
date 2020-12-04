import React from 'react'
import { Box } from '@styli/react'

export const DrawerHeader = ({ header }: any) => {
  if (typeof header !== 'string') {
    return <>{header}</>
  }

  return (
    <Box as="h2" p-20>
      {header}
    </Box>
  )
}
