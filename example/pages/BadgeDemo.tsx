import React from 'react'
import { Box } from '@fower/react'
import { Badge } from '@bone-ui/badge'
import { Avatar } from '@bone-ui/avatar'

export default function BadgeDemo() {
  return (
    <Box p20>
      <Box pb6 spaceY-20>
        <Box as="h2">Default</Box>
        <Box spaceX-10>
          <Badge content={5}></Badge>
          <Badge content={10}></Badge>
          <Badge content={100}></Badge>
          <Badge content={999}></Badge>
        </Box>

        <Box as="h2">Max</Box>

        <Box spaceX-10>
          <Badge content={100} max={99}></Badge>
          <Badge content={1000} max={999}></Badge>
        </Box>

        <Box as="h2">Content</Box>

        <Box toLeft spaceX6>
          <Badge content={99}>
            <Avatar rounded-10 name="Bill"></Avatar>
          </Badge>
          <Badge content={100} max={99}>
            <Avatar name="Job"></Avatar>
          </Badge>

          <Badge content="hot">
            <Avatar name="Mar" bgRed200 red800></Avatar>
          </Badge>
        </Box>

        <Box as="h2">Dot</Box>

        <Box toLeft spaceX4>
          <Badge variant="dot">
            <Avatar rounded-4 name="Job"></Avatar>
          </Badge>

          <Badge variant="dot" top-5 right-5>
            <Avatar rounded-16 name="Job"></Avatar>
          </Badge>

          <Badge variant="dot" bottom0 top={false}>
            <Avatar rounded-16 name="Job"></Avatar>
          </Badge>
        </Box>

        <Box as="h2">Customize style</Box>

        <Box toCenterY spaceX4>
          <Badge content={99} bgBrand500></Badge>

          <Badge content={100} bgOrange200 orange800></Badge>
          <Badge content={100} bgCyan200 border-2 borderCyan300 cyan800></Badge>

          <Badge variant="dot" bgYellow600>
            <Avatar rounded-4 name="Job"></Avatar>
          </Badge>

          <Badge variant="dot" bgBlue400>
            <Avatar rounded-4 name="Job"></Avatar>
          </Badge>
        </Box>
      </Box>
    </Box>
  )
}
