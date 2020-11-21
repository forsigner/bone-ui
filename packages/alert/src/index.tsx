import React, { forwardRef, InputHTMLAttributes } from 'react'
import { View } from '@styli/react'
import { AtomicProps } from '@styli/types'

type OmitInputHTMLAttributes = Omit<InputHTMLAttributes<HTMLDivElement>, 'size' | 'color'>

export interface CardProps
  extends React.DetailedHTMLProps<OmitInputHTMLAttributes, HTMLDivElement>,
    AtomicProps {
  variant?: 'outline' | 'filled'
  type?: 'default' | 'info' | 'warning' | 'success' | 'error'
}

const typeStyles = {
  default: {
    bgGray20: true,
    gray70: true,
    border: (_: any, { variant }: any) => {
      return variant ? '1px solid gray30' : false
    },
  },

  info: {
    bgBlue20: true,
    blue70: true,
    border: (_: any, { variant }: any) => {
      return variant ? '1px solid blue30' : false
    },
  },

  warning: {
    bgOrange20: true,
    orange70: true,
    border: (_: any, { variant }: any) => {
      return variant ? '1px solid orange30' : false
    },
  },

  success: {
    bgGreen20: true,
    green70: true,
    border: (_: any, { variant }: any) => {
      return variant ? '1px solid green30' : false
    },
  },

  error: {
    bgRed20: true,
    red70: true,
    border: (_: any, { variant }: any) => {
      return variant ? '1px solid red30' : false
    },
  },
}

export const Alert = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { type = 'default', ...rest } = props

  return (
    <View
      className="bone-alert"
      ref={ref}
      p4
      rounded-4
      css={{ transition: 'all 0.3s' }}
      {...typeStyles[type]}
      {...(rest as any)}
    ></View>
  )
})
