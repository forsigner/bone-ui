import React, { forwardRef } from 'react'
import { styled } from '@styli/styled'
import { StyliHTMLProps } from '@styli/types'
import { XOutline } from '@bone-ui/icons/lib/XOutline'

const Button = styled('button')

export interface CloseButtonProps extends StyliHTMLProps<'button'> {
  size?: number
}

export const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>((props, ref) => {
  const { size = 32, ...rest } = props
  return (
    <Button
      ref={ref}
      aria-label="Close"
      className="bone-close-button"
      center
      rounded={size * 0.2}
      cursorPointer
      p0
      bg="none"
      bgBlack-T94--hover
      s={size}
      outlineNone
      border="none"
      css={{ transition: 'all 0.3s' }}
      {...rest}
    >
      <XOutline opacity-80 s={size * 0.7}></XOutline>
    </Button>
  )
})
