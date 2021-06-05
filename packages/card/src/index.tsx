import React, { FC } from 'react'
import { forwardRef } from '@bone-ui/utils'
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

export const Card: FC<CardProps> = forwardRef((props: CardProps, ref) => {
  const { hoverable = false, variant = 'outline', ...rest } = props

  return (
    <Box
      className="bone-card"
      ref={ref}
      p4
      bgWhite
      rounded
      minW-256
      shadowLG--hover={hoverable}
      overflowHidden
      css={{ transition: 'box-shadow all 0.3s' }}
      {...variants[variant]}
      {...rest}
    ></Box>
  )
})
