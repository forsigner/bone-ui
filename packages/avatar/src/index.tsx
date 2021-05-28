import React, { forwardRef } from 'react'
import { Box } from '@styli/react'
import { StyliHTMLProps } from '@styli/types'

export interface AvatarProps extends StyliHTMLProps<'span'> {
  name?: string
  src?: string
  size?: number
}

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>((props, ref: any) => {
  const { src, size = 48, name, ...rest } = props

  // if (!src)
  return (
    <Box
      as="span"
      className="bone-avatar"
      ref={ref}
      bgRed20
      red80
      center
      uppercase
      f={size * 0.4}
      circle={size}
      {...rest}
    >
      {name}
    </Box>
  )
  return (
    <Box
      as="span"
      className="bone-avatar"
      ref={ref}
      center
      circle={size}
      overflow="hidden"
      f={size * 0.4}
      {...rest}
    >
      <Box as="img" className="bone-avatar-img" s-100p src={src}></Box>
    </Box>
  )
})
