import React, { CSSProperties, forwardRef } from 'react'
import { StyliHTMLProps } from '@styli/types'
import { Mask, Portal } from '@bone-ui/common'
import { DrawerBody } from './DrawerBody'
import { StyledAnimate } from './Animate'

export interface DrawerProps extends StyliHTMLProps<'div'> {
  isOpened: boolean
  onOpen(): void
  onClose(): void
  header?: React.ReactNode
  footer?: React.ReactNode
  style?: CSSProperties
  children?: any
}

export const Drawer = forwardRef<HTMLDivElement, DrawerProps>((props, ref) => {
  const { isOpened, onClose, onOpen, header, footer, children } = props

  return (
    <Portal ref={ref}>
      {/* drawer */}
      <StyledAnimate
        isOpened={isOpened}
        R-0
        T-0
        B-0
        fixed
        maxW-630
        minW-320
        h-100p
        oHidden
        zIndex-101
        // https://developer.mozilla.org/zh-CN/docs/Web/CSS/backface-visibility
        style={{ backfaceVisibility: 'hidden', visibility: isOpened ? 'visible' : 'hidden' }}
      >
        <DrawerBody
          isOpened={isOpened}
          onClose={onClose}
          onOpen={onOpen}
          header={header}
          footer={footer}
        >
          {children}
        </DrawerBody>
      </StyledAnimate>

      {/* mask */}
      <Mask isOpened={isOpened} />
    </Portal>
  )
})
