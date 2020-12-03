import React, { CSSProperties, forwardRef } from 'react'
import { useSpring, animated } from 'react-spring'
import { BaseProps } from './types'

export interface AnimateBaseProps extends BaseProps{
  from: CSSProperties | CSSProperties[]
  to: CSSProperties | CSSProperties[]
}

export const AnimateBase = forwardRef<HTMLDivElement, AnimateBaseProps>((props, ref) => {
  const { from, to, config, style, className, children } = props
  const animateStyle = useSpring({ from, to, config })

  return (
    <animated.div
      ref={ref}
      className={className}
      style={{ ...style, ...animateStyle }}>
      {children}
    </animated.div>
  )
})
