import React, { forwardRef, useContext } from 'react'
import { StyliHTMLProps } from '@styli/types'
import { CheckCircleSolid } from '@bone-ui/icons/lib/CheckCircleSolid'
import { InformationCircleSolid } from '@bone-ui/icons/lib/InformationCircleSolid'
import { ExclamationCircleSolid } from '@bone-ui/icons/lib/ExclamationCircleSolid'
import { alertContext } from './alertContext'

export interface AlertIconProps extends StyliHTMLProps<'svg'> {}

const IconComponents = {
  default: InformationCircleSolid,
  info: InformationCircleSolid,
  warning: ExclamationCircleSolid,
  success: CheckCircleSolid,
  error: ExclamationCircleSolid,
}

export const AlertIcon = forwardRef<SVGSVGElement, AlertIconProps>((props, ref) => {
  const { type = 'default' } = useContext(alertContext)
  const Icon = IconComponents[type]
  return <Icon className="bone-alert-icon" mr2 minW-24 s6 ref={ref} {...(props as any)}></Icon>
})
