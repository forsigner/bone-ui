import React from 'react'
import { Box } from '@fower/react'
import { Badge } from '@bone-ui/badge'
import { Avatar } from '@bone-ui/avatar'

export function ItemBadge(props: any) {
  return (
    <Box toEvenly toCenterY {...props}>
      <Badge content={10}></Badge>
      <Badge content={100} max={99}></Badge>
      <Badge content={100}>
        <Avatar size="md" src="https://avatars.githubusercontent.com/u/810438?v=4" />
      </Badge>
    </Box>
  )
}
