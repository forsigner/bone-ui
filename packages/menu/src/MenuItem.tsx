import React, { forwardRef } from 'react'
import { Box } from '@fower/react'
import { FowerHTMLProps } from '@fower/types'

export interface MenuItemProps extends FowerHTMLProps<'div'> {
  selected?: boolean
}

export const MenuItem = forwardRef<HTMLDivElement, MenuItemProps>((props, ref) => {
  const { selected, ...rest } = props
  return (
    <Box
      className="bone-menu-item"
      ref={ref}
      toLeft
      px-12
      py-8
      toCenterY
      green400={selected}
      gray800={!selected}
      cursorPointer
      spaceX3
      bgGray100--hover
      css={{ transition: 'background-color 0.4s' }}
      {...rest}
    />
  )
})
