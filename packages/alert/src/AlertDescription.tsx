import React, { forwardRef } from 'react'
import { Box } from '@styli/react'
import { StyliHTMLProps } from '@styli/types'

export interface AlertDescriptionProps extends StyliHTMLProps<'div'> {}

export const AlertDescription = forwardRef<HTMLDivElement, AlertDescriptionProps>((props, ref) => {
  return <Box className="bone-alert-description" lhNormal ref={ref} {...props}></Box>
})
