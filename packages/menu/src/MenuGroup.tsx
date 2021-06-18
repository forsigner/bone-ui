import React, { FC, ReactNode } from 'react'
import { forwardRef } from '@bone-ui/utils'
import { FowerHTMLProps } from '@fower/types'
import { Box } from '@fower/react'

export interface MenuGroupProps extends Omit<FowerHTMLProps<'div'>, 'title'> {
  title: ReactNode
}

export const MenuGroup: FC<MenuGroupProps> = forwardRef((props: MenuGroupProps, ref) => {
  const { title, children, ...rest } = props
  return (
    <Box className="bone-menu-group" ref={ref} {...rest}>
      <Box toCenterY gray500 px4 textXS minH8>
        {title}
      </Box>
      {children}
    </Box>
  )
})
