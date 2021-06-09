import React, { FC } from 'react'
import { forwardRef } from '@bone-ui/utils'
import { Box } from '@fower/react'
import { FowerHTMLProps, AtomicProps } from '@fower/types'
import { Placement, useInputGroupContext } from './context'

export interface InputAddonProps extends FowerHTMLProps<'div'> {
  placement?: 'left' | 'right'
}

const sizeMaps: any = {
  sm: 32,
  md: 40,
  lg: 48,
}

export const InputAddon: FC<InputAddonProps> = forwardRef((props: InputAddonProps, ref) => {
  let attrs: AtomicProps = {}
  const ctx = useInputGroupContext()
  if (ctx) {
    const { size, placement } = ctx
    const placementValue = placement.get(props)

    attrs.h = sizeMaps[size]
    attrs.borderT = 1
    attrs.borderB = 1

    if (placementValue === Placement.start) {
      attrs.borderL = 1
      attrs.roundedLMD = true
    }

    if (placementValue === Placement.end) {
      attrs.borderR = 1
      attrs.roundedRMD = true
    }
  }
  return (
    <Box
      className="bone-input-addon"
      ref={ref}
      px4
      bgGray100
      toCenter
      borderGray300
      {...(attrs as any)}
      {...props}
    />
  )
})
