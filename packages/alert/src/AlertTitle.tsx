import React, { forwardRef } from 'react'
import { View } from '@styli/react'
import { StyliHTMLProps } from '@styli/types'

export interface AlertTitleProps extends StyliHTMLProps<'div'> {}

export const AlertTitle = forwardRef<HTMLDivElement, AlertTitleProps>((props, ref) => {
  return <View className="bone-alert-title" ref={ref} fontBold lhNormal {...props}></View>
})
