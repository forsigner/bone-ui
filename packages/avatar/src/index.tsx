import React, { forwardRef } from 'react'
import { styled } from '@styli/styled'
import { StyliHTMLProps } from '@styli/types'

const Image = styled('img')
const Span = styled('span')

export interface AvatarProps extends StyliHTMLProps<'span'> {
  name?: string
  src?: string
  size?: number
}

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>((props, ref) => {
  const { src, size = 48, name, ...rest } = props

  if (!src)
    return (
      <Span
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
      </Span>
    )
  return (
    <Span
      className="bone-avatar"
      ref={ref}
      center
      circle={size}
      overflow="hidden"
      f={size * 0.4}
      {...rest}
    >
      <Image className="bone-avatar-img" s-100p src={src}></Image>
    </Span>
  )
})
