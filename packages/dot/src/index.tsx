import React, { forwardRef } from 'react'
import { Box } from '@styli/react'
import { StyliHTMLProps } from '@styli/types'

export const typeStyles = {
  default: { bgGray40: true },
  info: { bgBlue40: true },
  warning: { bgOrange40: true },
  success: { bgGreen40: true },
  error: { bgRed40: true },
}

export type DotType = keyof typeof typeStyles

export interface DotProps extends StyliHTMLProps<'div'> {
  variant?: 'outline' | 'unstyled' | 'shadow'
  type?: DotType
}

export const Dot = forwardRef<HTMLDivElement, DotProps>((props, ref) => {
  const { variant = 'outline', type = 'default', children, ...rest } = props

  return (
    <Box className="bone-dot" ref={ref} inlineFlex centerY>
      <Box className="bone-dot-color" s-8 rounded-9999 {...typeStyles[type]} {...rest}></Box>
      {children && (
        <Box as="span" className="bone-dot-text" ml-8>
          {children}
        </Box>
      )}
    </Box>
  )
})
