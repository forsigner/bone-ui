import { Box } from '@styli/react'
import React from 'react'
import { Arrow } from '@bone-ui/arrow'

export default function ArrowDemo() {

  return (
    <div>
      <Box
        relative
        s-300
        border="1px solid red"
      >
        <Arrow direction="bottom" />
        <Arrow direction="top" width={20} />
        <Arrow direction="left" width={10} color="#000" />
        <Arrow direction="right" width={30} color="gray" />
      </Box>
    </div>
  )
}
