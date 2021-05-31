import React, { useState } from 'react'
import { Menu, MenuItem } from '@bone-ui/menu'
import { Box } from '@fower/react'

export default function MenuDemo() {
  return (
    <Box p20>
      <Menu>
        <MenuItem>Red</MenuItem>
        <MenuItem selected>Green</MenuItem>
        <MenuItem>Blue</MenuItem>
      </Menu>
    </Box>
  )
}
