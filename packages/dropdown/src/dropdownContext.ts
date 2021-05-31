import { createContext } from 'react'
import { DropdownContext } from './types'

export const dropdownContext = createContext({} as DropdownContext)

export const DropdownProvider = dropdownContext.Provider
