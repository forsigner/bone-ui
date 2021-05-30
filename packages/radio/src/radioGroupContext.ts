import { createContext, ReactNode } from 'react'
import { RadioRenderItemProps } from './types'

export interface RadioGroupContext {
  /**
   * radio group unique name
   */
  name?: string

  /**
   * radio group name, string or number
   */
  radioGroupValue: any

  setRadioGroupValue: any

  renderItem?(props: RadioRenderItemProps): ReactNode
}

export const radioGroupContext = createContext<RadioGroupContext | null>(null)

export const RadioGroupProvider = radioGroupContext.Provider
