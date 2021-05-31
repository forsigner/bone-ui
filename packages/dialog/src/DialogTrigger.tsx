import React, { forwardRef, useCallback, useContext } from 'react'
import { Box } from '@fower/react'
import { DropdownProps } from './types'
import { dropdownContext } from './dialogContext'

export const DialogTrigger = forwardRef<HTMLDivElement, Partial<DropdownProps>>((props, ref) => {
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
      style={{
        display: 'inline-block',
      }}
      onClick={(e) => {
        e.stopPropagation() // TODO: 需要？
        clickTitle()
      }}
      {...rest}
    >
      {typeof children === 'function' ? (children as any)(renderProps) : children}
    </Box>
  )
})
