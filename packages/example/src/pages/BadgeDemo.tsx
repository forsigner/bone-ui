import React from 'react'
import { Box } from '@styli/react'
import { Badge } from '@bone-ui/badge'
import { UsersSolid } from '@bone-ui/icons'
import { Avatar } from '@bone-ui/avatar'

export default function BadgeDemo() {
  return (
    <div>
      <Box pb6 spaceY-20>
        <Box spaceX-10>
          <Badge content={5}></Badge>
          <Badge content={10}></Badge>
          <Badge content={100} max={99}></Badge>
          <Badge content={999}></Badge>
        </Box>

        <Box left spaceX-20>
          <Badge bgRed40 content={99}>
            <Avatar rounded-10 name="Bill"></Avatar>
          </Badge>
          <Badge bgGreen50 content={99}>
            <Avatar name="Job"></Avatar>
          </Badge>

          <Badge content="hot">
            <UsersSolid teal40 s-48></UsersSolid>
          </Badge>

          <Badge variant="dot">
            <Avatar rounded-4 name="Job"></Avatar>
          </Badge>

          <Badge variant="dot">
            <Avatar rounded-16 name="Job"></Avatar>
          </Badge>

          <Badge variant="dot" B-0 T={false}>
            <Avatar rounded-16 name="Job"></Avatar>
          </Badge>

          <Badge variant="dot">
            <Avatar name="Job"></Avatar>
          </Badge>

          <Badge variant="dot" T-6 R-16>
            <Avatar name="Job"></Avatar>
          </Badge>
        </Box>
      </Box>
    </div>
  )
}
