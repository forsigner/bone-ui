import React from 'react'
import { Box } from '@styli/react'
import { Button, ButtonGroup } from '@bone-ui/button'

export default function ButtonGroupDemo() {
  return (
    <Box spaceY-20>
      <ButtonGroup>
        <Button variant="outline" colorScheme="gray50">
          Small
        </Button>
        <Button variant="outline" colorScheme="gray50">
          Middle
        </Button>
        <Button variant="outline" colorScheme="gray50">
          Large
        </Button>
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
