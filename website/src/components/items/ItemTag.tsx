import React from 'react'
import { Box } from '@fower/react'
import { Tag } from '@bone-ui/tag'
import { Button } from '@bone-ui/button'

export function ItemTag(props: any) {
  return (
    <Box column spaceY3 {...props}>
      <Box toEvenly w-100p>
        <Tag colorScheme="red500">red500</Tag>
        <Tag colorScheme="yellow500">yellow500</Tag>
        <Tag colorScheme="indigo400">indigo400</Tag>
      </Box>

      <Box toEvenly w-100p>
        <Tag variant="light" colorScheme="red500">
          red500
        </Tag>
        <Tag variant="light" colorScheme="teal500">
          teal500
        </Tag>
        <Tag variant="light" colorScheme="green600">
          green600
        </Tag>
      </Box>
    </Box>
  )
}
