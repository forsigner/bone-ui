import React from 'react'
import { Box } from '@fower/react'
import { FowerHTMLProps } from '@fower/types'
import { FC, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export interface PortalProps extends FowerHTMLProps<'div'> {}

export const Portal: FC<PortalProps> = (props) => {
  const { children, ...rest } = props
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (typeof document === 'undefined') return null

  return mounted
    ? createPortal(
        <Box className="bone-portal" {...rest}>
          {children}
        </Box>,
        document.body,
      )
    : null
}
