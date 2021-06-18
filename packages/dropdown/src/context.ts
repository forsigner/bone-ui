import { createContext, useContext } from 'react'
import { DropdownContext } from './types'

export const dropdownContext = createContext({} as DropdownContext)

export const DropdownProvider = dropdownContext.Provider

export function useDropdownContext() {
  return useContext(dropdownContext)
}
