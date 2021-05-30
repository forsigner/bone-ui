import React from 'react'
import { Box } from '@fower/react'
import { RadioRenderProps, DefaultRender } from './types'

export const defaultRender: DefaultRender = ({ checked }: RadioRenderProps) => (
  <Box toCenter circle-20 border-2 borderGray400={!checked} borderBrand400={checked} overflowHidden>
    <Box circle-8 bgBrand400 hidden={!checked}></Box>
  </Box>
)
