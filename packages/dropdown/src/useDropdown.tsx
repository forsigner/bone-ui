import { useState } from 'react'
import { DropdownProps, DropdownState, UseDropdownReturn } from './types'

export function useDropdown(props: DropdownProps): UseDropdownReturn {
  const { initialOpened = false, onClose, onOpen } = props

  const [state, setState] = useState({
    isOpen: initialOpened,
  } as DropdownState)

  const obj = {
    state,
    setState,
    dropdownProps: props,
    open() {
      setState((prev) => ({ ...prev, isOpen: true }))
      onOpen?.()
    },
    close() {
      setState((prev) => ({ ...prev, isOpen: false }))
      onClose?.()
    },
    getRenderProps() {
      return {
        isOpen: state.isOpen,
        close: obj.close,
        open: obj.open,
      }
    },
  }
  return obj
}
