import React, { forwardRef } from 'react'
import { Box } from '@styli/react'
import { StyliHTMLProps } from '@styli/types'

export interface BadgeProps extends StyliHTMLProps<'div'> {
  variant?: 'standard' | 'dot'

  content?: string | number

  max?: number
}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>((props, ref) => {
  const { variant = 'standard', children, content, max, ...rest } = props
  const hasChildren = !!children
  const isStandard = variant === 'standard'

  const offsetStyle = {
    transform: 'translate(50%, -50%)',
    transformOrigin: '100% 0%',
  }

  return (
    <Box className={`bone-badge bone-badge-${variant}`} ref={ref} relative inlineFlex>
      <Box
        className="bone-badge-content"
        absolute={hasChildren}
        T={hasChildren ? 0 : false}
        R={hasChildren ? 0 : false}
        h={isStandard ? 20 : 8}
        minW={isStandard ? 20 : 8}
        px-6={isStandard}
        lh-20px={isStandard}
        center
        f-12
        white
        bgRed50
        rounded-9999
        zIndex-1
        css={hasChildren ? offsetStyle : {}}
        {...rest}
      >
        {isStandard && getContent(content, max)}
      </Box>
      {children}
    </Box>
  )
})

function getContent(content?: string | number, max: number = 0) {
  if (typeof content !== 'number') return content
  if (max > 0) return max + '+'
  return content
}
