import React, { forwardRef } from 'react'
import { Box } from '@fower/react'
import { FowerHTMLProps } from '@fower/types'

export interface CardProps extends FowerHTMLProps<'div'> {
  variant?: 'outline' | 'unstyled' | 'shadow'

  hoverable?: boolean
}

const variants = {
  outline: {
    border: true,
    borderGray200: true,
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
      css={{ transition: 'box-shadow all 0.3s' }}
      {...variants[variant]}
      {...rest}
    ></Box>
  )
})
