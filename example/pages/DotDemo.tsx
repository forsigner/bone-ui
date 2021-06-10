import React from 'react'
import { Box } from '@fower/react'
import { Dot } from '@bone-ui/dot'

export default function DotDemo() {
  return (
    <Box spaceY-20 p10>
      <Box spaceX-20 toLeft>
        <Dot></Dot>
        <Dot type="error"></Dot>
        <Dot type="info"></Dot>
        <Dot type="success"></Dot>
        <Dot type="warning"></Dot>
      </Box>

      <Box spaceX-20>
        <Dot>Default</Dot>
        <Dot type="error">Error</Dot>
        <Dot type="info">Info</Dot>
        <Dot type="success">Success</Dot>
        <Dot type="warning">Warning</Dot>
      </Box>

      <Box spaceY-10 column>
        <Dot bgTeal400>Custom Background Color</Dot>
        <Dot bgPink400>Custom Background Color</Dot>
      </Box>

      <Box spaceY-10 column>
        <Dot bgPurple400 square-10>
          Custom Size
        </Dot>
        <Dot bgPurple400 square-12>
          Custom Size
        </Dot>

        <Dot bgYellow400 square-16 border borderYellow800>
          with border
        </Dot>
      </Box>
    </Box>
  )
}
