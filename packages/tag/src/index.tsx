import React, { forwardRef, cloneElement } from 'react'
import { styli } from '@styli/core'
import { StyliColor } from '@styli/types'
import { Box } from '@styli/react'
import { StyliHTMLProps } from '@styli/types'

export interface TagProps extends StyliHTMLProps<'div'> {
  colorScheme?: StyliColor

  variant?: 'outline' | 'solid'

  size?: Size

  icon?: React.ReactElement
}

type Size = 'xs' | 'sm' | 'md' | 'lg' | number

export const Tag = forwardRef<HTMLDivElement, TagProps>((props, ref) => {
  const { variant = 'solid', colorScheme = 'primary', size = 'xs', icon, children, ...rest } = props

  const sizeStyle = getSizeStyle(size)

  return (
    <Box
      className="bone-tag"
      ref={ref}
      inlineFlex
      center
      f-12
      h-24
      px-6
      rounded-9999
      {...getVariantStyle(colorScheme)[variant]}
      {...sizeStyle}
      {...rest}
    >
      {icon && cloneElement(icon, { s: sizeStyle.f })}
      {icon && <Box w-6></Box>}
      {children}
    </Box>
  )
})

function getVariantStyle(color: string): any {
  return {
    solid: {
      c: 'white',
      bg: color,
    },
    outline: {
      color,
      border: true,
      borderColor: styli.getColorValue(color),
    },
  }
}

function getSizeStyle(size: Size) {
  const sizes = {
    xs: { h: 24, f: 12, px: 12 },
    sm: { h: 28, f: 14, px: 16 },
    md: { h: 32, f: 16, px: 20 },
    lg: { h: 36, f: 18, px: 24 },
  }
  if (typeof size === 'string') return sizes[size]
  return { h: size, px: size * 0.5, f: size * 0.4 }
}
