import React from 'react'
import { Avatar } from '@bone-ui/avatar'
import { Box } from '@fower/react'

export default function AvatarDemo() {
  return (
    <Box p4 spaceX2 toCenter>
      <Avatar src="https://avatars2.githubusercontent.com/u/2668081?s=460&u=6e7f6312c57a4b4f23cc4504ff3f62d4e42f9259&v=4"></Avatar>

      <Avatar name="fo"></Avatar>

      <Avatar name="fo" size={24} bgOrange200 orange800></Avatar>
    </Box>
  )
}
