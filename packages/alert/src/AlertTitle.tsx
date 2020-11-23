import React, { forwardRef, InputHTMLAttributes } from 'react'
import { View } from '@styli/react'
import { AtomicProps } from '@styli/types'

type OmitInputHTMLAttributes = Omit<InputHTMLAttributes<HTMLDivElement>, 'color'>

export interface AlertTitleProps
  extends React.DetailedHTMLProps<OmitInputHTMLAttributes, HTMLDivElement>,
    AtomicProps {}

export const AlertTitle = forwardRef<HTMLDivElement, AlertTitleProps>((props, ref) => {
  return <View className="bone-alert-title" ref={ref} fontBold lhNormal {...(props as any)}></View>
})
