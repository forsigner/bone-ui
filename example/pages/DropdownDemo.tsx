import React, { useState } from 'react'
import { Dropdown, DropdownContent, DropdownTrigger } from '@bone-ui/dropdown'
import { Box } from '@fower/react'

export default function DropdownDemo() {
  return (
    <Box p20>
      <Dropdown>
        <DropdownTrigger>
          <Box bgBlue300 p4 rounded>
            click
          </Box>
        </DropdownTrigger>
        <DropdownContent square-200>content</DropdownContent>
      </Dropdown>
    </Box>
  )
}
