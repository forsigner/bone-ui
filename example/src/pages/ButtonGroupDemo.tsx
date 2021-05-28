import React from 'react'
import { Box } from '@styli/react'
import { Button, ButtonGroup } from '@bone-ui/button'

export default function ButtonGroupDemo() {
  return (
    <Box spaceY-20>
      <ButtonGroup>
        <Button>Small</Button>
        <Button>Middle</Button>
        <Button>Large</Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button colorScheme="teal40">Small</Button>
        <Button colorScheme="teal40">Middle</Button>
        <Button colorScheme="teal40">Large</Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button variant="outline">Small</Button>
        <Button variant="outline">Middle</Button>
        <Button variant="outline">Large</Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button variant="outline" size="sm">
          Small
        </Button>
        <Button variant="outline" size="sm">
          Middle
        </Button>
        <Button variant="outline" size="sm">
          Large
        </Button>
      </ButtonGroup>
    </Box>
  )
}
