import React, { FC } from 'react'
import { forwardRef } from '@bone-ui/utils'
import { Box } from '@fower/react'
import { FowerHTMLProps, AtomicProps } from '@fower/types'
import { Placement, useInputGroupContext } from './context'
import { Id } from './types'

export interface InputElementProps extends FowerHTMLProps<'div'> {
  placementMap?: 'left' | 'right'
}

const sizeMaps: any = {
  sm: 32,
  md: 40,
  lg: 48,
}

export const InputElement: FC<InputElementProps> = forwardRef((props: InputElementProps, ref) => {
  let attrs: AtomicProps = {}
  const ctx = useInputGroupContext()
  if (ctx.placementMap) {
    const { size, placementMap } = ctx
    const { placement } = placementMap.get(props)!

    attrs.square = sizeMaps[size]

    if (placement === Placement.start) {
      attrs.left = 0
    }

    if (placement === Placement.end) {
      attrs.right = 0
    }
  }
  return (
    <Box
      className="bone-input-element"
      ref={ref}
      absolute
      top0
      toCenter
      zIndex-2
      {...(attrs as any)}
      {...props}
    />
  )
})
;(InputElement as any).id = Id.InputElement
