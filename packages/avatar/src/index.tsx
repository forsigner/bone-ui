import React, { forwardRef } from 'react'
import { styled } from '@fower/styled'
import { FowerHTMLProps } from '@fower/types'
import { Box } from '@fower/react'

const Image = styled('img')
export interface AvatarProps extends FowerHTMLProps<'div'> {
  name?: string
  src?: string
  size?: 'sm' | 'md' | 'lg' | number
}

const sizes: any = {
  sm: 24,
  md: 32,
  lg: 48,
}

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>((props, ref) => {
  const { src, size = 'md', name, ...rest } = props

  const s = sizes[size]

  return (
    <Box
      ref={ref as any}
      className="bone-avatar"
      toCenter
      circle={s}
      overflow="hidden"
      bgBrand500={!!name && !src}
      text={s * 0.6}
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
