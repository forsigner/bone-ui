import React, { FC } from 'react'
import { forwardRef } from '@bone-ui/utils'
import { CheckOutline } from '@bone-ui/icons/lib/CheckOutline'
import { FowerHTMLProps } from '@fower/types'
import { Box } from '@fower/react'
import { useMenuContext } from './context'

export interface MenuItemProps extends FowerHTMLProps<'div'> {
  selected?: boolean
}

export const MenuItem: FC<MenuItemProps> = forwardRef((props: MenuItemProps, ref) => {
  const { selected, children, ...rest } = props
  const { colorScheme, showCheckIcon, checkIcon } = useMenuContext()
  if (selected) rest.color = colorScheme

  const icon = checkIcon ? checkIcon : <CheckOutline size={18} />

  return (
    <Box
      className="bone-menu-item"
      ref={ref}
      px3
      minH9
      toCenterY
      toBetween
      gray800={!selected}
      cursorPointer
      bgGray100--hover
      transitionCommon
      duration-400
      {...rest}
    >
      <Box>{children}</Box>
      {showCheckIcon && selected && icon}
    </Box>
  )
})
