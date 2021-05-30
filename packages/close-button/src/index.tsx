import React, { forwardRef } from 'react'
import { styled } from '@fower/styled'
import { FowerHTMLProps } from '@fower/types'
import { XOutline } from '@bone-ui/icons/lib/XOutline'

const Button = styled('button')

export interface CloseButtonProps extends FowerHTMLProps<'button'> {
  size?: number
}

export const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>((props, ref) => {
  const { size = 32, ...rest } = props
  return (
    <Button
      ref={ref}
      aria-label="Close"
      className="bone-close-button"
      toCenter
      rounded={size * 0.2}
      cursorPointer
      p0
      bgTransparent
      bgBlack--T94--hover
      square={size}
      outlineNone
      borderNone
      css={{ transition: 'background-color 0.3s' }}
      {...rest}
    >
      <XOutline opacity-80 square={size * 0.7}></XOutline>
    </Button>
  )
})
