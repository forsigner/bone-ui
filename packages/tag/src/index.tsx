import React, { forwardRef, cloneElement } from 'react'
import { FowerColor } from '@fower/types'
import { Box } from '@fower/react'
import { FowerHTMLProps } from '@fower/types'
import { store } from '@fower/store'

export interface TagProps extends FowerHTMLProps<'div'> {
  colorScheme?: FowerColor

  variant?: 'outline' | 'filled'

  size?: Size

  icon?: React.ReactElement
}

type Size = 'xs' | 'sm' | 'md' | 'lg' | number

export const Tag = forwardRef<HTMLDivElement, TagProps>((props, ref) => {
  const {
    variant = 'filled',
    colorScheme = 'brand500',
    size = 'xs',
    icon,
    children,
    ...rest
  } = props

  const sizeStyle = getSizeStyle(size)
  const colors: any = store.theme.colors
  const color = colors[colorScheme]

  const isStringChildren = typeof children === 'string'

  return (
    <Box
      className="bone-tag"
      ref={ref}
      display="inline-flex"
      toCenter
      text-12
      h-24
      px-6
      rounded-9999
      {...getVariantStyle(color)[variant]}
      {...sizeStyle}
      {...rest}
    >
      {icon && cloneElement(icon, { square: sizeStyle.text })}
      {icon && <Box w-6></Box>}
      {isStringChildren && <Box as="span">{children}</Box>}
      {!isStringChildren && children}
    </Box>
  )
})

function getVariantStyle(color: string): any {
  return {
    filled: {
      color: 'white',
      bg: color,
    },
    outline: {
      color,
      border: true,
      borderColor: color,
    },
  }
}

function getSizeStyle(size: Size) {
  const sizes = {
    xs: { h: 24, text: 12, px: 8 },
    sm: { h: 28, text: 14, px: 12 },
    md: { h: 32, text: 16, px: 14 },
    lg: { h: 36, text: 18, px: 20 },
  }
  if (typeof size === 'string') return sizes[size]
  return { h: size, px: size * 0.6, text: size * 0.5 }
}
