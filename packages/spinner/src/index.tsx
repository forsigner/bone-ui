import React, { forwardRef } from 'react'
import { Box, Svg } from '@styli/react'
import { StyliHTMLProps, StyliColor } from '@styli/types'

export interface SpinnerProps extends StyliHTMLProps<'div'> {
  size?: number

  /**
   * animation speed
   * @example 0.8s
   */
  speed?: string

  colorScheme?: StyliColor

  // children?: React.ReactChild
  children?: React.ReactElement
}

interface SpinnerIconProps {
  size: number
  colorScheme?: string
}

const SpinnerIcon = ({ size, colorScheme }: SpinnerIconProps) => (
  <Svg s={size} c={colorScheme} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
      style={{ opacity: 0.25 }}
    ></circle>
    <path
      style={{ opacity: 0.75 }}
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </Svg>
)

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>((props, ref) => {
  const { size = 24, speed = '1s', colorScheme = 'primary', children, ...rest } = props

  if (Array.isArray(children)) {
    throw new Error('require single child element')
  }

  return (
    <Box
      ref={ref}
      className="bone-spinner"
      inlineBlock
      s={size}
      css={{ animation: `spin ${speed} linear infinite` }}
      {...rest}
    >
      {!children && <SpinnerIcon size={size} colorScheme={colorScheme}></SpinnerIcon>}

      {!!children && React.cloneElement(children, { s: size, c: colorScheme })}
    </Box>
  )
})
