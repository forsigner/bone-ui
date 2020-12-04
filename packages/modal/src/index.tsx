import React, { CSSProperties, forwardRef } from 'react'
import { StyliHTMLProps } from '@styli/types'
import { Mask, Portal } from '@bone-ui/common'
import { ModalBody } from './ModalBody'
import { StyledAnimate } from './Animate'
import { Box } from '@styli/react'

export interface ModalProps extends StyliHTMLProps<'div'> {
  isOpened: boolean
  onOpen(): void
  onClose(): void
  header?: React.ReactNode
  footer?: React.ReactNode
  style?: CSSProperties
  children?: any
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>((props, ref) => {
  const { isOpened, onClose, onOpen, header, footer, children } = props

  return (
    <Portal ref={ref}>
    <Box ref={ref}>
      {/* modal */}
      <StyledAnimate
        isOpened={isOpened}
        L-50p
        T-50p
        fixed
        w-50p
        h-auto
        maxW-630
        minW-320
        center
        oHidden
        rounded-10
        zIndex-101
        cursorPointer={isOpened}
        cursorNone={!isOpened}
        // https://developer.mozilla.org/zh-CN/docs/Web/CSS/backface-visibility
        style={{ backfaceVisibility: 'hidden', visibility: isOpened ? 'visible' : 'hidden' }}
      >
        <ModalBody
          isOpened={isOpened}
          onClose={onClose}
          onOpen={onOpen}
          header={header}
          footer={footer}
        >
          {children}
        </ModalBody>
      </StyledAnimate>

      {/* mask */}
      <Mask isOpened={isOpened} />
    </Box>
    </Portal>
  )
})
