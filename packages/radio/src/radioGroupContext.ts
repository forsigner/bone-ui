import { createContext } from 'react'

interface RadioGroupContext {
  radioGroupValue: any

  setRadioGroupValue: any
}

export const radioGroupContext = createContext<RadioGroupContext | null>(null)

export const RadioGroupProvider = radioGroupContext.Provider
