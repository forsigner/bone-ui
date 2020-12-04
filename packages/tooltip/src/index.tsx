import React, { forwardRef } from 'react'
import { Box } from '@styli/react'
import { StyliHTMLProps } from '@styli/types'
import { Arrow } from '@bone-ui/common'
import { StyledFade } from '@bone-ui/animate'

type Placement = 'top' | 'right' | 'bottom' | 'left'

export interface TooltipProps extends StyliHTMLProps<'div'> {
  isOpened: boolean
  label?: string | React.ReactElement
  children?: any
  bg?: string
  className?: string
  placement?: Placement
}

export const Tooltip = forwardRef<HTMLInputElement, TooltipProps>((props, ref) => {
  const { label, isOpened = false, children, placement = 'top', bg = 'rgba(0,0,0,0.5)' } = props

  return (
    <Box ref={ref} relative inlineBlock>
      {children}
      <StyledFade
        isOpened={isOpened}
        absolute
        bg={bg}
        p-10-5
        shadowXL
        {...(getPositionStyle(isOpened)[placement] as any)}
      >
        {label}
        <Arrow direction={reverse.get(placement) as any} color={bg} />
      </StyledFade>
    </Box>
  )
})

function getPositionStyle(isOpened: boolean) {
  const commonStyle = {
    visibility: isOpened ? 'visible' : 'hidden',
  }

  return {
    top: {
      T: -10,
      L: '50%',
      style: {
        ...commonStyle,
        transform: 'translate(-50%, -100%)',
      },
    },
    bottom: {
      B: -10,
      L: '50%',
      style: {
        ...commonStyle,
        transform: 'translate(-50%, 100%)',
      },
    },
    left: {
      T: '50%',
      L: -10,
      style: {
        ...commonStyle,
        transform: 'translate(-100%, -50%)',
      },
    },
    right: {
      T: '50%',
      R: -10,
      style: {
        ...commonStyle,
        transform: 'translate(100%, -50%)',
      },
    },
  }
}

const reverse: Map<Placement, Placement> = new Map([
  ['top', 'bottom'],
  ['bottom', 'top'],
  ['right', 'left'],
  ['left', 'right'],
])
