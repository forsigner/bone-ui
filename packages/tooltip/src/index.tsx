import React, { forwardRef } from 'react'
import { Box } from '@styli/react'
import { StyliHTMLProps } from '@styli/types'
import { Arrow } from '@bone-ui/common'
import { StyledFade } from '@bone-ui/animate'

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
    isOpened = false,
    children,
    bg = 'rgba(0,0,0,0.5)',
  } = props

  if (!isOpened) return <>{children}</>

  return (
    <Box ref={ref} relative inlineBlock>
      {children}
      <StyledFade
        isOpened={isOpened}
        T--10px
        L-50p
        absolute
        bg={bg}
        p-10-5
        css={{
          transform: 'translate(-50%, -100%)',
        }}
      >
        {label}
        <Arrow direction="bottom" color={bg} />
      </StyledFade>
    </Box>
  )
})
