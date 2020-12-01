import React from 'react'
import { Box } from "@styli/react"

export const DrawerContent = ({ content }: any) => {

  if (typeof content !== 'string') {
    return (
      <>
        {content}
      </>
    )
  }

  return (
    <Box
      px-20
    >
      {content}
    </Box>
  )
}