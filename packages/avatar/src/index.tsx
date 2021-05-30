import React, { forwardRef } from 'react'
import { styled } from '@fower/styled'
import { FowerHTMLProps } from '@fower/types'
import { Box } from '@fower/react'

const Image = styled('img')
export interface AvatarProps extends FowerHTMLProps<'div'> {
  name?: string
  src?: string
  size?: number
}

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>((props, ref) => {
  const { src, size = 48, name, ...rest } = props

  return (
    <Box
      ref={ref as any}
      className="bone-avatar"
      toCenter
      circle={size}
      overflow="hidden"
      bgBrand500={!!name && !src}
      text={size * 0.6}
      {...rest}
    >
      {src && <Image className="bone-avatar-img" square-100p src={src} />}
      {!src && !!name && (
        <Box as="span" inlineFlex>
          {name.charAt(0)}
        </Box>
      )}
    </Box>
  )
})
