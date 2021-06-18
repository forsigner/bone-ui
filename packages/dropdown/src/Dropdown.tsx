import React, { FC } from 'react'
import { DropdownProvider } from './context'
import { DropdownProps } from './types'
import { useDropdown } from './useDropdown'

export const Dropdown: FC<DropdownProps> = (props) => {
  const { children } = props
  const dropdown = useDropdown(props)
  const renderProps = dropdown.getRenderProps()

  return (
    <DropdownProvider value={dropdown}>
      {typeof children === 'function' ? children(renderProps) : children}
    </DropdownProvider>
  )
}
