import React from 'react'
import { Box, Image } from '@fower/react'
import { Card } from '@bone-ui/card'
import { Divider } from '@bone-ui/divider'

export default function CardDemo() {
  return (
    <Box w-400 p10 spaceY4>
      <Card>A basic card.</Card>

      <Box bgGray100 p4>
        <Card borderNone>An unstyled card.</Card>
      </Box>

      <Card shadow borderNone>
        A card with shadow.
      </Card>

      <Card shadowMD--hover>A hoverable card.</Card>

      <Card spaceY4>
        <Box textLG fontBold>
          Bone UI
        </Box>
        <Box>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus quis
          sed voluptatum quae eum fugit earum.
        </Box>
      </Card>

      <Card spaceY4>
        <Box textLG fontBold>
          Bone UI
        </Box>
        <Divider></Divider>
        <Box>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus quis
          sed voluptatum quae eum fugit earum.
        </Box>
      </Card>

      <Card p0>
        <Box p4>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus quis
          sed voluptatum quae eum fugit earum.
        </Box>
        <Divider></Divider>
        <Box textLG fontBold p4>
          Bone UI
        </Box>
      </Card>

      <Card p0>
        <Image w-100p src="https://avatars2.githubusercontent.com/u/2668081"></Image>
        <Box p4>
          <Box textLG fontBold mb2>
            Bone UI
          </Box>
          <Box>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus
            quis sed voluptatum quae eum fugit earum.
          </Box>
        </Box>
      </Card>
    </Box>
  )
}
