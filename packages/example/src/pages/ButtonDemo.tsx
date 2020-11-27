import React from 'react'
import { Box, Heading } from '@styli/react'
import { Button } from '@bone-ui/Button'
import { DownloadOutline } from '@bone-ui/icons'

export default function ButtonDemo() {
  return (
    <Box>
      <Heading>Size</Heading>
      <Box row spaceX-20>
        <Button size="xs">Xsmall</Button>
        <Button size="sm">Small</Button>
        <Button size="md">Middle</Button>
        <Button size="lg">Large</Button>
        <Button size={60}>Large</Button>
      </Box>

      <Heading>variant</Heading>
      <Box row spaceX-20>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="solid">Solid</Button>
      </Box>

      <Heading>colorScheme</Heading>
      <Box row space-20 wrap>
        <Button colorScheme="gray40">gray40</Button>
        <Button colorScheme="red40">Red40</Button>
        <Button colorScheme="blue40">Blue40</Button>
        <Button colorScheme="yellow40">Yello40</Button>
        <Button colorScheme="orange40">orange40</Button>
        <Button colorScheme="pink40">pink40</Button>
        <Button colorScheme="green40">green40</Button>
        <Button colorScheme="purple40">purple40</Button>
        <Button colorScheme="indigo40">indigo40</Button>
      </Box>

      <Heading>Block</Heading>
      <Box spaceY-20>
        <Button variant="outline" w-100p>
          Outline
        </Button>
        <Button variant="solid" w-100p>
          Solid
        </Button>
      </Box>

      <Heading>with icon</Heading>

      <Box row spaceX-20>
        <Button leftIcon={<DownloadOutline mr1 />}>LeftIcon</Button>
        <Button rightIcon={<DownloadOutline ml1 />}>RightIcon</Button>
        <Button leftIcon={<DownloadOutline mr1 />} rightIcon={<DownloadOutline ml1 />}>
          With icon
        </Button>
      </Box>

      <Heading>disabled</Heading>

      <Box row space-20 wrap>
        <Button disabled colorScheme="gray40">
          gray40
        </Button>
        <Button disabled colorScheme="red40">
          Red40
        </Button>
        <Button disabled colorScheme="blue40">
          Blue40
        </Button>
        <Button disabled colorScheme="yellow40">
          Yello40
        </Button>
        <Button disabled colorScheme="orange40">
          orange40
        </Button>
        <Button disabled colorScheme="pink40">
          pink40
        </Button>
        <Button disabled colorScheme="green40">
          green40
        </Button>
        <Button disabled colorScheme="purple40">
          purple40
        </Button>
        <Button disabled colorScheme="indigo40">
          indigo40
        </Button>
      </Box>
    </Box>
  )
}
