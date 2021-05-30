import React, { forwardRef } from 'react'
import { Box } from '@fower/react'
import { FowerHTMLProps } from '@fower/types'

export interface AlertTitleProps extends FowerHTMLProps<'div'> {}

export const AlertTitle = forwardRef<HTMLDivElement, AlertTitleProps>((props, ref) => {
  return <Box className="bone-alert-title" ref={ref} fontBold leadingNormal {...props}></Box>
})
