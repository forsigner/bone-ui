import React from 'react'
import { Box } from '@fower/react'
import { Divider, DividerTitle } from '@bone-ui/divider'

export default function DividerDemo() {
  return (
    <Box p20>
      <Box as="h2">Default</Box>
      <Box spaceX-10>
        <Divider></Divider>
      </Box>

      <Box as="h2">Vertical</Box>
      <Box h-60 toCenter>
        <Divider orientation="vertical"></Divider>
      </Box>

      <Box as="h2">With Text</Box>
      <Box>
        <Divider>
          <DividerTitle>INTRO</DividerTitle>
        </Divider>
      </Box>

      <Box as="h2">With Text</Box>
      <Box h-100 toCenter>
        <Divider orientation="vertical">
          <DividerTitle>INTRO</DividerTitle>
        </Divider>
      </Box>

      <Box as="h2">Horizontal Example</Box>
      <Box>
        <Box>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus
          eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum
          quis sed voluptatum quae eum fugit earum.
        </Box>
        <Divider my4>
          <DividerTitle>INTRO</DividerTitle>
        </Divider>
        <Box>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus
          eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum
          quis sed voluptatum quae eum fugit earum.
        </Box>
      </Box>

      <Box as="h2">Vertical Example</Box>
      <Box toCenter spaceX2 h-20>
        <Box>Item1</Box>
        <Divider orientation="vertical"></Divider>
        <Box>Item2</Box>
        <Divider orientation="vertical"></Divider>
        <Box>Item3</Box>
      </Box>

      <Box as="h2">Customize style</Box>
      <Box spaceY4>
        <Divider bgRed500></Divider>
        <Divider h-2></Divider>
        <Divider h-4></Divider>
        <Divider h-8></Divider>
      </Box>
    </Box>
  )
}
