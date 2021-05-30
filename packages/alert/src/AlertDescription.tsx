import React, { forwardRef } from 'react'
import { Box } from '@fower/react'
import { FowerHTMLProps } from '@fower/types'

export interface AlertDescriptionProps extends FowerHTMLProps<'div'> {}

export const AlertDescription = forwardRef<HTMLDivElement, AlertDescriptionProps>((props, ref) => {
  return <Box className="bone-alert-description" leadingNormal ref={ref} {...props}></Box>
})
