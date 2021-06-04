import React from 'react'
import { Avatar } from '@bone-ui/avatar'
import { Box } from '@fower/react'

export default function AvatarDemo() {
  return (
    <Box p4>
      <Box as="h2">Default</Box>
      <Box toCenter spaceX2>
        <Avatar src="https://avatars.githubusercontent.com/u/25254?v=4" />
        <Avatar src="https://avatars.githubusercontent.com/u/810438?v=4" />
        <Avatar src="https://avatars2.githubusercontent.com/u/2668081" />
      </Box>

      <Box as="h2">Size</Box>
      <Box toCenter spaceX2>
        <Avatar size="sm" src="https://avatars.githubusercontent.com/u/25254?v=4" />
        <Avatar size="md" src="https://avatars.githubusercontent.com/u/810438?v=4" />
        <Avatar size="lg" src="https://avatars2.githubusercontent.com/u/2668081" />
      </Box>

      <Box as="h2">Any Sizes</Box>

      <Box toCenter spaceX2>
        <Avatar size={24} src="https://avatars.githubusercontent.com/u/25254?v=4" />
        <Avatar size={48} src="https://avatars.githubusercontent.com/u/810438?v=4" />
        <Avatar size={72} src="https://avatars2.githubusercontent.com/u/2668081" />
        <Avatar size={108} src="https://avatars.githubusercontent.com/u/25254?v=4" />
      </Box>

      <Box as="h2">Corner</Box>
      <Box toCenter spaceX2>
        <Avatar rounded-1 size="lg" src="https://avatars.githubusercontent.com/u/25254?v=4" />
        <Avatar rounded size="lg" src="https://avatars.githubusercontent.com/u/810438?v=4" />
        <Avatar roundedXL size="lg" src="https://avatars2.githubusercontent.com/u/2668081" />
      </Box>

      <Box as="h2">Name Text</Box>
      <Box toCenter spaceX2>
        <Avatar name="A" />
        <Avatar name="B" />
        <Avatar name="M" />
        <Avatar name="S" />
        <Avatar name="U" />
        <Avatar name="K" />
      </Box>

      <Box as="h2">Customize style</Box>
      <Box toCenter spaceX2>
        <Avatar
          border-3
          borderOrange500
          size="lg"
          src="https://avatars.githubusercontent.com/u/25254?v=4"
        />
        <Avatar name="A" bgRed200 red800 />
        <Avatar name="U" bgTeal200 bgTeal300--hover teal800 />
        <Avatar name="S" bgGray200 gray800 shadow />
      </Box>
    </Box>
  )
}
