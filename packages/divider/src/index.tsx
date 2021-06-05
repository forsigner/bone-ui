import React, { FC } from 'react'
import { forwardRef } from '@bone-ui/utils'
import { FowerHTMLProps } from '@fower/types'
import { Box } from '@fower/react'

type Placement = 'top' | 'right' | 'bottom' | 'left'

export interface DividerProps extends FowerHTMLProps<'div'> {
  isOpened: boolean
  label?: string | React.ReactElement
  children?: any
  bg?: string
  className?: string
  placement?: Placement
}

export const Divider: FC<DividerProps> = forwardRef((props: DividerProps, ref) => {
  const { ...rest } = props
  return (
    <Box ref={ref} className="bone-ui-divider" {...rest}>
      <Box>....</Box>
    </Box>
  )
})
