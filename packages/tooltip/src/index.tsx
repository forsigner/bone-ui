import React, { forwardRef } from 'react'
import { Box } from '@styli/react'
import { StyliHTMLProps } from '@styli/types'
import { Arrow } from '@bone-ui/arrow'

export interface TooltipProps extends StyliHTMLProps<'div'> {
  isOpened: boolean
  label?: string | React.ReactElement
  children?: any
  bg?: string
  className?: string
}

export const Tooltip = forwardRef<HTMLInputElement, TooltipProps>((props, ref) => {
  const {
    label,
    className = "",
    isOpened = false,
    children,
    bg = 'rgba(0,0,0,0.5)',
    ...rest
  } = props

  if (!isOpened) return <>{children}</>

  return (
    <Box
      ref={ref}
      relative
      inlineBlock
    >
      {
        children
      }
      <Box
        T--10px
        L-50p
        absolute
        bg={bg}
        p-10-5
        css={{
          transform: 'translate(-50%, -100%)',
        }}
        {...rest}
      >
        {label}
        <Arrow direction="bottom" color={bg} />
      </Box>
    </Box>
  )
})
