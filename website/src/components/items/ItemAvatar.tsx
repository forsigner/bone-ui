import React from 'react'
import { Box } from '@fower/react'
import { Avatar } from '@bone-ui/avatar'

export function ItemAvatar(props: any) {
  return (
    <Box toEvenly toCenterY {...props}>
      <Avatar size="sm" src="https://avatars.githubusercontent.com/u/25254?v=4" />
      <Avatar size="md" src="https://avatars.githubusercontent.com/u/810438?v=4" />
      <Avatar size="lg" src="https://avatars2.githubusercontent.com/u/2668081" />
    </Box>
  )
}
