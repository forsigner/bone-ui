import React, { useState } from 'react'
import { Dropdown, DropdownContent, DropdownTrigger } from '@bone-ui/dropdown'
import { Box } from '@fower/react'
import { Menu, MenuItem } from '@bone-ui/menu'
import { Button } from '@bone-ui/button'

export default function DropdownDemo() {
  return (
    <Box p20 space4 bgYellow100 mt-1000>
      <Dropdown>
        <DropdownTrigger>
          <Button>Trigger</Button>
        </DropdownTrigger>
        <DropdownContent square-200>content</DropdownContent>
      </Dropdown>

      {/* <Dropdown placement="right">
        <DropdownTrigger>
          <Button>Trigger</Button>
        </DropdownTrigger>
        <DropdownContent shadow={false}>
          <Menu>
            <MenuItem>One</MenuItem>
            <MenuItem>Two</MenuItem>
            <MenuItem>Three</MenuItem>
          </Menu>
        </DropdownContent>
      </Dropdown> */}
    </Box>
  )
}
