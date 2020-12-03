import React from 'react'
import { Box } from '@styli/react'
import { RadioRenderProps, DefaultRender } from './types'

export const defaultRender: DefaultRender = ({ checked }: RadioRenderProps) => (
  <Box center circle-20 border-2 borderGray40={!checked} borderPrimary={checked} overflow="hidden">
    <Box circle-8 bgPrimary hide={!checked}></Box>
  </Box>
)
