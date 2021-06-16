import React from 'react'
import { Menu, MenuItem } from '@bone-ui/menu'
import { Box } from '@fower/react'

export default function MenuDemo() {
  return (
    <Box p20 w-400 spaceY2>
      <Box as="h2">Baisc</Box>
      <Menu>
        <MenuItem selected>Red</MenuItem>
        <MenuItem selected>Green</MenuItem>
        <MenuItem>Blue</MenuItem>
      </Menu>

      <Box as="h2">Color Scheme</Box>
      <Menu colorScheme="red500">
        <MenuItem>Red</MenuItem>
        <MenuItem selected>Green</MenuItem>
        <MenuItem>Blue</MenuItem>
      </Menu>

      <Menu colorScheme="pink500">
        <MenuItem>Red</MenuItem>
        <MenuItem selected>Green</MenuItem>
        <MenuItem>Blue</MenuItem>
      </Menu>
    </Box>
  )
}
