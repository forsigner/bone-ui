import React, { forwardRef, InputHTMLAttributes } from 'react'
import { View } from '@styli/react'
import { AtomicProps } from '@styli/types'

type OmitInputHTMLAttributes = Omit<InputHTMLAttributes<HTMLDivElement>, 'size' | 'color'>

export interface CardProps
  extends React.DetailedHTMLProps<OmitInputHTMLAttributes, HTMLDivElement>,
    AtomicProps {
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
  const {
    colorScheme: colorSchema = 'blue50',
    size = 'medium',
    hoverable = false,
    variant = 'outline',
    ...rest
  } = props

  return (
    <View
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
      {...(rest as any)}
    ></View>
  )
})
