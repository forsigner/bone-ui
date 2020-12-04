import React, { forwardRef } from 'react'
import { Box } from '@styli/react'
import { StyliHTMLProps } from '@styli/types'
import { CloseButton } from '@bone-ui/close-button'
import { ModalHeader } from './Header'
import { ModalFooter } from './Footer'
import { useClickAway } from '@bone-ui/hooks'

export interface ModalProps extends StyliHTMLProps<'div'> {
  isOpened: boolean
  onOpen(): void
  onClose(): void
  header?: React.ReactNode
  content?: React.ReactNode
  footer?: React.ReactNode
  children?: any
}

export const ModalBody = forwardRef<HTMLDivElement, ModalProps>((props, ref) => {
  const { onClose, header, footer, children } = props

  return (
    <Box ref={useClickAway(onClose)} w-100p h-100p>
      <Box ref={ref} w-100p h-100p bgWhite relative oHidden zIndex-101>
        <ModalHeader header={header} />
        {children}
        <ModalFooter footer={footer} />
        <CloseButton absolute s-30 R-12 T-8 onClick={onClose} />
      </Box>
    </Box>
  )
})
