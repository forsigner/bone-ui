import React, { forwardRef, useState } from 'react'
import { Box } from '@styli/react'
import { StyliHTMLProps } from '@styli/types'
import { CheckboxGroupProvider } from './context'

type StringOrNumber = string | number

export interface CheckboxGroupProps
  extends Omit<StyliHTMLProps<'div'>, 'onChange' | 'defaultValue'> {
  value?: StringOrNumber[]

  defaultValue?: StringOrNumber[]

  onChange?(nextValue: StringOrNumber[]): void

  name?: string
}
export const CheckboxGroup = forwardRef<HTMLInputElement, CheckboxGroupProps>((props, ref) => {
  const { children, onChange, value, ...rest } = props
  const [radioGroupValue, setRadioGroupValue] = useState<any>(value)

  function setValue(value: any) {
    setRadioGroupValue(value)
    onChange && onChange(value)
  }

  if (value && !Array.isArray(value)) {
    console.warn('required an array value')
  }

  return (
    <CheckboxGroupProvider
      value={{ checkboxGroupValue: radioGroupValue, setCheckboxGroupValue: setValue }}
    >
      <Box ref={ref} left spaceX-8 {...(rest as any)}>
        {children}
      </Box>
    </CheckboxGroupProvider>
  )
})
