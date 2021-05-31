import React, { forwardRef } from 'react'
import { Box } from '@fower/react'
import { FowerHTMLProps } from '@fower/types'
import { CloseButton } from '@bone-ui/close-button'
import { DrawerHeader } from './Header'
import { DrawerFooter } from './Footer'
import { useOutsideClick } from '@bone-ui/hooks'

export interface DrawerProps extends FowerHTMLProps<'div'> {
  isOpened: boolean
  onOpen(): void
  onClose(): void
  header?: React.ReactNode
  footer?: React.ReactNode
  children?: any
}

export const DrawerBody = forwardRef<HTMLDivElement, DrawerProps>((props, ref) => {
  useOutsideClick({
    ref: ref as any,
    handler() {
      onClose()
    },
  })
  const { onClose, header, footer, children } = props

  return (
    <Box ref={ref} w-100p h-100p>
      <Box ref={ref} w-100p h-100p bgWhite relative overflow="hidden" zIndex-101>
        <DrawerHeader header={header} />
        {children}
        <DrawerFooter footer={footer} />
        <CloseButton absolute square-30 right-12 top-8 onClick={onClose} />
      </Box>
    </Box>
  )
})
