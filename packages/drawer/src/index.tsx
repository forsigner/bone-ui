import React, { forwardRef } from 'react'
import { Box } from '@styli/react'
import { StyliHTMLProps } from '@styli/types'
import { CloseButton } from '@bone-ui/close-button'
import { DrawerHeader } from './Header'
import { DrawerContent } from './Content'
import { DrawerFooter } from './Footer'

export interface DrawerProps extends StyliHTMLProps<'div'> {
  isOpened: boolean
  onOpen(): void
  onClose(): void
  header?: string | React.ReactElement
  content?: string | React.ReactElement
  footer?: string | React.ReactElement
  className?: string
}

export const Drawer = forwardRef<HTMLInputElement, DrawerProps>((props, ref) => {
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
      center
      oHidden
      bgBlack-T50
      w-0={!isOpened}
      h-0={!isOpened}
      w-100p={isOpened}
      h-100p={isOpened}
      opacity-0={!isOpened}
      opacity-100={isOpened}
      onClick={onClose}
    >
      <Box onClick={e => e.stopPropagation()}>
        <Box
          fixed
          T-0
          R-0
          B-0
          bgWhite
          w-0={!isOpened}
          w-30p={isOpened}
          className={`animated slideInRight ${className}`}
          {...rest}>
          <DrawerHeader header={header} />
          <DrawerContent content={content} />
          <DrawerFooter footer={footer} />
          <CloseButton absolute s-30 R-12 T-8 onClick={onClose} />
        </Box>        
      </Box>
    </Box>
  )
})
