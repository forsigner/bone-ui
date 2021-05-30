import React from 'react'
import { Box } from '@fower/react'
import { CheckOutline } from '@bone-ui/icons/lib/CheckOutline'
import { CheckboxStatus } from './types'

export const checkboxDefaultRender = ({ checked }: CheckboxStatus) => (
  <Box
    toCenter
    square-20
    border-2
    rounded-4
    borderGray400={!checked}
    borderBrand500={!!checked}
    bgBrand500={!!checked}
  >
    <CheckOutline white square-20 strokeWidth={4} hidden={!checked}></CheckOutline>
  </Box>
)
