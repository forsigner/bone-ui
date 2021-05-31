import React, { forwardRef } from 'react'
import { Box } from '@fower/react'
import { FowerHTMLProps } from '@fower/types'

export interface MenuProps extends FowerHTMLProps<'div'> {}

export const Menu = forwardRef<HTMLDivElement, MenuProps>((props, ref) => {
  return (
    <Box
      className="bone-menu"
      ref={ref}
      bgWhite
      minW-140
      rounded-4
      overflowHidden
      shadow
      {...props}
    />
  )
})
