import React, { forwardRef, InputHTMLAttributes, useContext } from 'react'
import { AtomicProps } from '@styli/types'
import { CheckCircleSolid } from '@bone-ui/icons/lib/CheckCircleSolid'
import { InformationCircleSolid } from '@bone-ui/icons/lib/InformationCircleSolid'
import { ExclamationCircleSolid } from '@bone-ui/icons/lib/ExclamationCircleSolid'

import { alertContext } from './alertContext'

type OmitInputHTMLAttributes = Omit<InputHTMLAttributes<HTMLDivElement>, 'size' | 'color'>

export interface AlertIconProps
  extends React.DetailedHTMLProps<OmitInputHTMLAttributes, HTMLDivElement>,
    AtomicProps {}

const IconComponents = {
  default: InformationCircleSolid,
  info: InformationCircleSolid,
  warning: ExclamationCircleSolid,
  success: CheckCircleSolid,
  error: ExclamationCircleSolid,
}

export const AlertIcon = forwardRef<HTMLDivElement, AlertIconProps>((props, ref) => {
  const { type = 'default' } = useContext(alertContext)
  const Icon = IconComponents[type]
  return <Icon mr2 minW-24 s6 ref={ref as any} {...(props as any)}></Icon>
})
