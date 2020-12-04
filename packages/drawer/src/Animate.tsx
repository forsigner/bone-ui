import React, { CSSProperties, FC } from 'react'
import { AnimateBase } from '@bone-ui/animate'
import { styled } from '@styli/styled'

interface AnimateProps {
  isOpened: boolean
  children: any
  style?: CSSProperties
  className?: string
}

export const Animate: FC<AnimateProps> = (props) => {
  const { isOpened, children, style, className } = props

  const from = {
    opacity: 0,
    maxWidth: 0,
    minWidth: 0,
  }

  const to = {
    opacity: 1,
    maxWidth: 630,
    minWidth: 320,
  }

  return (
    <AnimateBase
      from={from}
      to={isOpened ? to : from}
      style={style}
      className={className}>
      {children}
    </AnimateBase>
  )
}

export const StyledAnimate = styled(Animate)
