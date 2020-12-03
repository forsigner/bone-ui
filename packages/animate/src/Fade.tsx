import React, { forwardRef } from 'react'
import { AnimateBase } from './Base'
import { styled } from '@styli/styled'
import { BaseProps } from './types'

interface FadeProps extends BaseProps {
  isOpened: boolean
  children: any
}

export const Fade = forwardRef<HTMLDivElement, FadeProps>((props, ref) => {
  const { isOpened, children, ...rest } = props

  const from = { opacity: 0 }
  const to = { opacity: 1 }

  return (
    <AnimateBase
      ref={ref}
      from={from}
      to={isOpened ? to : from}
      {...rest}
    >
      {children}
    </AnimateBase>
  )
})

export const StyledFade = styled(Fade)
