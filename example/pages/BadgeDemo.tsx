import React from 'react'
import { Box } from '@fower/react'
import { Badge } from '@bone-ui/badge'
import UsersSolid from '@bone-ui/icons/lib/UserSolid'
import { Avatar } from '@bone-ui/avatar'

export default function BadgeDemo() {
  return (
    <Box p4>
      <Badge variant="dot">
        <Avatar rounded-4 name="Job"></Avatar>
      </Badge>

      <Badge variant="dot">
        <Avatar rounded-16 name="Job"></Avatar>
      </Badge>

      <Badge variant="dot" bottom0 top={false}>
        <Avatar rounded-16 name="Job"></Avatar>
      </Badge>

      <Badge variant="dot">
        <Avatar name="Job"></Avatar>
      </Badge>

      <Badge variant="dot" top-5 right-10>
        <Avatar name="Job"></Avatar>
      </Badge>
    </Box>
  )
  return (
    <Box>
      <Box pb6 spaceY-20>
        <Box spaceX-10>
          <Badge content={5}></Badge>
          <Badge content={10}></Badge>
          <Badge content={100} max={99}></Badge>
          <Badge content={999}></Badge>
        </Box>

        <Box toLeft spaceX-20>
          <Badge bgRed400 content={99}>
            <Avatar rounded-10 name="Bill"></Avatar>
          </Badge>
          <Badge bgGreen500 content={99}>
            <Avatar name="Job"></Avatar>
          </Badge>

          <Badge content="hot">
            <UsersSolid teal400 square-48></UsersSolid>
          </Badge>

          <Badge variant="dot">
            <Avatar rounded-4 name="Job"></Avatar>
          </Badge>

          <Badge variant="dot">
            <Avatar rounded-16 name="Job"></Avatar>
          </Badge>

          <Badge variant="dot" bottom0 top={false}>
            <Avatar rounded-16 name="Job"></Avatar>
          </Badge>

          <Badge variant="dot">
            <Avatar name="Job"></Avatar>
          </Badge>

          <Badge variant="dot" top-6 right-16>
            <Avatar name="Job"></Avatar>
          </Badge>
        </Box>
      </Box>
    </Box>
  )
}
