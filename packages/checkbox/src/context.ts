import { createContext } from 'react'

interface CheckboxGroupContext {
  checkboxGroupValue: any[]

  setCheckboxGroupValue: any
}

export const checkboxGroupContext = createContext<CheckboxGroupContext | null>(null)

export const CheckboxGroupProvider = checkboxGroupContext.Provider
