import React, { forwardRef, InputHTMLAttributes } from 'react'
import { View } from '@styli/react'
import { AtomicProps } from '@styli/types'
import { AlertType, typeStyles } from './typeStyles'
import { AlertProvider } from './alertContext'

type OmitInputHTMLAttributes = Omit<InputHTMLAttributes<HTMLDivElement>, 'size' | 'color'>

export interface AlertProps
  extends React.DetailedHTMLProps<OmitInputHTMLAttributes, HTMLDivElement>,
    AtomicProps {
  variant?: 'outline' | 'filled'
  type?: AlertType
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const { type = 'default', ...rest } = props

  return (
    <AlertProvider value={{ type }}>
      <View
        className="bone-alert"
        ref={ref}
        p4
        rounded-4
        centerY
        relative
        {...typeStyles[type]}
        {...(rest as any)}
      ></View>
    </AlertProvider>
  )
})
