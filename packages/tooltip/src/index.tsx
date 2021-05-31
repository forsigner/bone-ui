import React, { forwardRef } from 'react'
import { FowerHTMLProps } from '@fower/types'

type Placement = 'top' | 'right' | 'bottom' | 'left'

export interface TooltipProps extends FowerHTMLProps<'div'> {
  isOpened: boolean
  label?: string | React.ReactElement
  children?: any
  bg?: string
  className?: string
  placement?: Placement
}

export const Tooltip = forwardRef<HTMLInputElement, TooltipProps>(() => {
  return <div>...</div>
})
