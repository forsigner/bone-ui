import React, { forwardRef } from 'react'
import { Image, Text } from '@styli/react'
import { StyliHTMLProps } from '@styli/types'

export interface AvatarProps extends StyliHTMLProps<'span'> {
  name?: string
  src?: string
  size?: number
}

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>((props, ref) => {
  const { src, size = 48, name, ...rest } = props
  const atomicProps: any = rest // fix type warning

  if (!src)
    return (
      <Text ref={ref} bgRed20 red80 center uppercase f={size * 0.4} circle={size} {...atomicProps}>
        {name}
      </Text>
    )
  return <Image {...atomicProps} circle={size} src={src}></Image>
})
