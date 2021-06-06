import React from 'react'
import { Box } from '@fower/react'
import { CloseButton } from '@bone-ui/close-button'

export default function CloseButtonDemo() {
  return (
    <Box w-800 p10 spaceY3>
      <Box>Default</Box>

      <Box>
        <CloseButton size={24}></CloseButton>
      </Box>

      <Box>Sizes</Box>

      <Box toCenterY spaceX3>
        <CloseButton size="sm"></CloseButton>
        <CloseButton size="md"></CloseButton>
        <CloseButton size="lg"></CloseButton>
        <CloseButton size={30}></CloseButton>
        <CloseButton size={18}></CloseButton>
      </Box>

      <Box>Rounded</Box>

      <Box toCenterY spaceX3>
        <CloseButton size="sm" roundedFull></CloseButton>
        <CloseButton size="md" roundedFull></CloseButton>
        <CloseButton size="lg" roundedNone></CloseButton>
      </Box>

      <Box>Customize background</Box>

      <Box toCenterY spaceX3>
        <CloseButton size="sm" bgBlack--T96 bgBlack--T90--hover roundedFull></CloseButton>
        <CloseButton size="md" bgGreen100--T20></CloseButton>
        <CloseButton size="lg" bgBlack--T96 roundedFull></CloseButton>
      </Box>

      <Box>Set color</Box>

      <Box toCenterY spaceX3>
        <CloseButton size="sm" red600></CloseButton>
        <CloseButton size="md" green600></CloseButton>
        <CloseButton size="lg" purple600></CloseButton>
      </Box>
    </Box>
  )
}
