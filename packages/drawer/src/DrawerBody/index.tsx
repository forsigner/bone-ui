import React, { forwardRef } from 'react'
import { Box } from '@styli/react'
import { StyliHTMLProps } from '@styli/types'
import { CloseButton } from '@bone-ui/close-button'
import { DrawerHeader } from './Header'
import { DrawerFooter } from './Footer'
import { useClickAway } from '@bone-ui/hooks'

export interface DrawerProps extends StyliHTMLProps<'div'> {
  isOpened: boolean
  onOpen(): void
  onClose(): void
  header?: React.ReactNode
  footer?: React.ReactNode
  children?: any
}

export const DrawerBody = forwardRef<HTMLDivElement, DrawerProps>((props, ref) => {
  const { onClose, header, footer, children } = props

  return (
    <Box ref={useClickAway(onClose)} w-100p h-100p>
      <Box ref={ref} w-100p h-100p bgWhite relative oHidden zIndex-101>
        <DrawerHeader header={header} />
        {children}
        <DrawerFooter footer={footer} />
        <CloseButton absolute s-30 R-12 T-8 onClick={onClose} />
      </Box>
    </Box>
  )
})
