import React, { CSSProperties, forwardRef } from 'react'
import { FowerHTMLProps } from '@fower/types'

export interface DrawerProps extends FowerHTMLProps<'div'> {
  isOpened: boolean
  onOpen(): void
  onClose(): void
  header?: React.ReactNode
  footer?: React.ReactNode
  style?: CSSProperties
  children?: any
}

export const Drawer = forwardRef<HTMLDivElement, DrawerProps>(() => {
  return <div>...</div>
})
