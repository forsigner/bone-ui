import { createContext, ReactNode } from 'react'
import { RadioRenderItemProps } from './types'

interface RadioGroupContext {
  radioGroupValue: any

  setRadioGroupValue: any

  renderItem?(props: RadioRenderItemProps): ReactNode
}

export const radioGroupContext = createContext<RadioGroupContext | null>(null)

export const RadioGroupProvider = radioGroupContext.Provider
