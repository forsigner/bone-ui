import React from 'react'
import { Menu, MenuItem, MenuGroup } from '@bone-ui/menu'
import { UserSolid, MailSolid } from '@bone-ui/icons'
import { Box } from '@fower/react'
import { Divider } from '@bone-ui/divider'

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

      <Box as="h2">With icon</Box>
      <Menu colorScheme="red500">
        <MenuItem icon={<UserSolid size={20} />}>Red</MenuItem>
        <MenuItem icon={MailSolid} selected>
          Green
        </MenuItem>
        <MenuItem>Blue</MenuItem>
        <MenuItem>Pink</MenuItem>
      </Menu>

      <Menu colorScheme="pink500">
        <MenuGroup title="颜色一">
          <MenuItem disabled>Red</MenuItem>
          <MenuItem selected>Green</MenuItem>
          <MenuItem>Blue</MenuItem>
        </MenuGroup>
        <Divider></Divider>
        <MenuGroup title="颜色二">
          <MenuItem>Yellow</MenuItem>
          <MenuItem>Pink</MenuItem>
        </MenuGroup>
      </Menu>
    </Box>
  )
}
