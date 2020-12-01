import React from 'react'
import { Box } from "@styli/react"

export const ModalContent = ({ content }: any) => {

  if (typeof content !== 'string') {
    return (
      <>
        {content}
      </>
    )
  }

  return (
    <Box
      minH-200
      maxH-500
      px-20
      oyScroll
    >
      {content}
    </Box>
  )
}