import React, { FC, useCallback } from 'react'
import { forwardRef } from '@bone-ui/utils'
import { FowerHTMLProps } from '@fower/types'
import { Box } from '@fower/react'
import { useDropdownContext } from './context'

export interface DropdownTriggerProps extends FowerHTMLProps<'div'> {}

export const DropdownTrigger: FC<DropdownTriggerProps> = forwardRef(
  (props: DropdownTriggerProps, ref) => {
    const { children, ...rest } = props
    const ctx = useDropdownContext()
    const renderProps = ctx.getRenderProps()
    const { isOpen } = ctx.state

    const refCallback = useCallback((node) => {
      ref = node
      ctx.setState((prev: any) => {
        return { ...prev, referenceElement: ref }
      })
    }, [])

    const clickTitle = () => {
      isOpen ? ctx.close() : ctx.open()
    }

    return (
      <Box
        ref={refCallback}
        className="bone-dropdown-trigger"
        inlineBlock
        onClick={() => {
          // e.stopPropagation() // TODO: 需要？

          if (!ctx.dropdownProps.manualTrigger) {
            clickTitle()
          }
        }}
        {...rest}
      >
        {typeof children === 'function' ? children(renderProps) : children}
      </Box>
    )
  },
)
