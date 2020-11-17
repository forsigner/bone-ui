import React, { FC } from 'react'
import { Image, Text } from '@styli/react'
import { AtomicProps } from '@styli/types'

export interface AvatarProps extends AtomicProps {
  name?: string
  src?: string
  size?: number
}

export const Avatar: FC<AvatarProps> = (props) => {
  const { src, size = 48, name, ...rest } = props
  const atomicProps: any = rest // fix type warning

  if (!src)
    return (
      <Text
        bgRed20
        red80
        inlineBlock
        center
        uppercase
        f={size * 0.4}
        circle={size}
        {...atomicProps}
      >
        {name}
      </Text>
    )
  return <Image {...atomicProps} circle={size} src={src}></Image>
}
