import React from 'react'
import { RadioRenderProps, DefaultRender } from '@bone-ui/radio'
import { MenuItem } from '@bone-ui/menu'

export const defaultRender: DefaultRender = ({ checked, disabled, item }: RadioRenderProps) => (
  <MenuItem
    w-100p
    cursorNotAllowed={disabled}
    opacity-50={disabled}
    brand500={checked}
    bgGray100={checked}
  >
    {item?.label}
  </MenuItem>
)
