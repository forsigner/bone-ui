import React, { FC, useState } from 'react'
import { DropdownProvider } from './dropdownContext'
import { DropdownContext, DropdownState, DropdownProps } from './types'

export const Dropdown: FC<DropdownProps> = (props) => {
  const { children, initialOpened, onClose, onOpen } = props

  const [state, setState] = useState({
    isOpen: initialOpened,
  } as DropdownState)

  const ctxValue: DropdownContext = {
    state,
    setState,
    dropdownProps: props,
    open() {
      setState((prev) => ({
        ...prev,
        isOpen: true,
      }))
      onOpen?.()
    },
    close() {
      setState((prev) => ({
        ...prev,
        isOpen: false,
      }))
      onClose?.()
    },
    getRenderProps() {
      return {
        isOpen: state.isOpen,
        close: ctxValue.close,
        open: ctxValue.open,
      }
    },
  }

  const renderProps = ctxValue.getRenderProps()

  return (
    <DropdownProvider value={ctxValue}>
      {typeof children === 'function' ? children(renderProps) : children}
    </DropdownProvider>
  )
}
