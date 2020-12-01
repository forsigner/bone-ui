import React, { forwardRef, useState } from 'react'
import { Box } from '@styli/react'
import { StyliHTMLProps } from '@styli/types'
import { RadioGroupProvider } from './radioGroupContext'

type StringOrNumber = string | number

export interface RadioGroupProps extends Omit<StyliHTMLProps<'div'>, 'onChange'> {
  value?: StringOrNumber

  defaultValue?: StringOrNumber

  onChange?(nextValue: StringOrNumber): void

  name?: string
}
export const RadioGroup = forwardRef<HTMLInputElement, RadioGroupProps>((props, ref) => {
  const { children, onChange, value, ...rest } = props
  const [radioGroupValue, setRadioGroupValue] = useState<any>(value)

  function setValue(value: any) {
    setRadioGroupValue(value)
    onChange && onChange(value)
  }

  return (
    <RadioGroupProvider value={{ radioGroupValue, setRadioGroupValue: setValue }}>
      <Box ref={ref} left spaceX-8 {...rest}>
        {children}
      </Box>
    </RadioGroupProvider>
  )
})
