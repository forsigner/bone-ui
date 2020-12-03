import React, { FC } from 'react'
import { Box } from '@styli/react'
import { StyledFade } from '@bone-ui/animate'

interface MaskProp {
  isOpened: boolean
}

export const Mask: FC<MaskProp> = (props) => {
  const { isOpened } = props

  return (
    <StyledFade
      isOpened={isOpened}
      style={{ visibility: isOpened ? 'visible' : 'hidden' }}
    >
      <Box
        fixed
        T-0
        L-0
        B-0
        R-0
        bgBlack-T50
        zIndex-100
      />
    </StyledFade>
  )
}
