import React, { forwardRef, InputHTMLAttributes } from 'react'
import { View } from '@styli/react'
import { AtomicProps } from '@styli/types'

type OmitInputHTMLAttributes = Omit<InputHTMLAttributes<HTMLDivElement>, 'color'>

export interface AlertDescriptionProps
  extends React.DetailedHTMLProps<OmitInputHTMLAttributes, HTMLDivElement>,
    AtomicProps {}

export const AlertDescription = forwardRef<HTMLDivElement, AlertDescriptionProps>((props, ref) => {
  return <View className="bone-alert-description" lhNormal ref={ref} {...(props as any)}></View>
})
