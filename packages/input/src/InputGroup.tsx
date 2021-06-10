import React, { FC } from 'react'
import { forwardRef } from '@bone-ui/utils'
import { Box } from '@fower/react'
import { FowerHTMLProps } from '@fower/types'
import { InputGroupProvider, Placement } from './context'

export interface InputGroupProps extends FowerHTMLProps<'div'> {}

export const InputGroup: FC<InputGroupProps> = forwardRef((props: InputGroupProps, ref) => {
  let size: string = 'md'
  const { children } = props
  const childrenArray: any[] = Array.isArray(children) ? children : [children]

  const placementMap = new Map()

  const validChildren = childrenArray.filter((child) => React.isValidElement(child))

  validChildren.forEach((child, index) => {
    const { id = '' } = child.type
    const placement =
      index === 0
        ? Placement.start
        : index === validChildren.length - 1
        ? Placement.end
        : Placement.middle

    placementMap.set(child.props, { id, placement })
    if (child.props?.size) size = child.props?.size
  })

  return (
    <InputGroupProvider
      value={{
        size,
        placementMap,
      }}
    >
      <Box className="bone-input-group" ref={ref} toCenterY relative {...props} />
    </InputGroupProvider>
  )
})
