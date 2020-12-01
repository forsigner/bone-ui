import React, { forwardRef } from 'react'
import { Box } from '@styli/react'
import { StyliHTMLProps } from '@styli/types'
import { CloseButton } from '@bone-ui/close-button'
import { ModalHeader } from './Header'
import { ModalContent } from './Content'
import { ModalFooter } from './Footer'

export interface ModalProps extends StyliHTMLProps<'div'> {
  isOpened: boolean
  onOpen(): void
  onClose(): void
  header?: React.ReactNode
  content?: React.ReactNode
  footer?: React.ReactNode
  className?: string
}

export const Modal = forwardRef<HTMLInputElement, ModalProps>((props, ref) => {
  const {
    isOpened,
    onOpen,
    onClose,
    header,
    content,
    footer,
    className = "",
    ...rest
  } = props

  return (
    <Box
      ref={ref}
      fixed
      T-0
      L-0
      B-0
      R-0
      oHidden
      bgBlack-T50
      w-0={!isOpened}
      h-0={!isOpened}
      w-100p={isOpened}
      h-100p={isOpened}
      onClick={onClose}
    >
      <Box
        center
        w-100p
        h-100p
        onClick={e => e.stopPropagation()}
        >
        <Box
          bgWhite
          relative
          maxW-30p
          rounded-5
          className={`animated zoomIn ${className}`}
          {...rest}>
          <ModalHeader header={header} />
          <ModalContent content={content} />
          <ModalFooter footer={footer} />
          <CloseButton absolute s-30 R-12 T-8 onClick={onClose} />
        </Box>        
      </Box>
    </Box>
  )
})
