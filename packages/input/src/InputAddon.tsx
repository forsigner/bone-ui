import React, { FC } from 'react'
import { forwardRef } from '@bone-ui/utils'
import { Box } from '@fower/react'
import { FowerHTMLProps, AtomicProps } from '@fower/types'
import { Placement, useInputGroupContext } from './context'

export interface InputAddonProps extends FowerHTMLProps<'div'> {
  placementMap?: 'left' | 'right'
}

export const InputAddon: FC<InputAddonProps> = forwardRef((props: InputAddonProps, ref) => {
  let attrs: AtomicProps = {}
  const ctx = useInputGroupContext()

  if (ctx.placementMap) {
    const { size, placementMap } = ctx
    const { placement } = placementMap.get(props)!

    attrs.h = size
    attrs.borderT = 1
    attrs.borderB = 1

    if (placement === Placement.start) {
      attrs.borderL = 1
      attrs.roundedLeftMD = true
    }

    if (placement === Placement.end) {
      attrs.borderR = 1
      attrs.roundedRightMD = true
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
;(InputAddon as any).id = 'InputAddon'
