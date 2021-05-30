import React, { forwardRef } from 'react'
import { Box } from '@fower/react'
import { FowerHTMLProps } from '@fower/types'
import { AlertType, getTypeStyles } from './typeStyles'
import { AlertProvider } from './alertContext'

export interface AlertProps extends Omit<FowerHTMLProps<'div'>, 'type'> {
  variant?: 'outline' | 'filled'
  type?: AlertType
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const { type = 'default', ...rest } = props

  return (
    <AlertProvider value={{ type } as any}>
      <Box
        as="div"
        className="bone-alert"
        ref={ref}
        p4
        rounded-4
        toCenter
        relative
        border
        {...getTypeStyles(type)}
        {...rest}
      ></Box>
    </AlertProvider>
  )
})
