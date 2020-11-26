import React from 'react'
import { Box } from '@styli/react'
import { Dot } from '@bone-ui/dot'

export const DotDemo = () => {
  return (
    <Box spaceY-20>
      <Box spaceX-20 left>
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
        <Dot bgTeal40>Custom Background Color</Dot>
        <Dot bgPink40>Custom Background Color</Dot>
        <Dot bgPurple40 s-10>
          Custom Size
        </Dot>
        <Dot bgPurple40 s-12>
          Custom Size
        </Dot>

        <Dot bgYellow40 s-16 border borderYellow80>
          with border
        </Dot>
      </Box>
    </Box>
  )
}
