import React, { forwardRef } from 'react'
import { Box } from '@styli/react'
import { StyliHTMLProps } from '@styli/types'

export interface CardProps extends StyliHTMLProps<'div'> {
  variant?: 'outline' | 'unstyled' | 'shadow'
  hoverable?: boolean
}

const variants = {
  outline: {
    border: '1px solid gray20',
  },
  shadow: {
    shadowMD: true,
  },
  unstyled: {
    border: 'none',
  },
}

export const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { hoverable = false, variant = 'outline', ...rest } = props

  return (
    <Box
      className="bone-card"
      ref={ref}
      p4
      bgWhite
      rounded-6
      minW-256
      shadowLG--hover={hoverable}
      overflow="hidden"
      css={{ transition: 'all 0.3s' }}
      {...variants[variant]}
      {...rest}
    ></Box>
  )
})
