import React, { forwardRef, useCallback, useContext } from 'react'
import { FowerHTMLProps } from '@fower/types'
import { Box } from '@fower/react'
import { dropdownContext } from './dropdownContext'

export interface DropdownTriggerProps extends FowerHTMLProps<'div'> {}

export const DropdownTrigger = forwardRef<HTMLDivElement, DropdownTriggerProps>((props, ref) => {
  const { children, ...rest } = props
  const ctx = useContext(dropdownContext)
  const renderProps = ctx.getRenderProps()
  const { isOpen } = ctx.state

  const refCallback = useCallback((node) => {
    ref = node
    ctx.setState((prev: any) => {
      return {
        ...prev,
        referenceElement: ref,
      }
    })
  }, [])

  const clickTitle = () => {
    isOpen ? ctx.close() : ctx.open()
  }

  return (
    <Box
      ref={refCallback}
      className="bone-ui-dropdown-trigger"
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
})
