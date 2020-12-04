import React, { forwardRef, useState } from 'react'
import { Box } from '@styli/react'
import { RadioGroupProvider } from './radioGroupContext'
import { Radio } from './Radio'
import { defaultRender } from './defaultRender'
import { RadioGroupProps, RadioProps } from './types'

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>((props, ref) => {
  const { children, onChange, value, options = [], renderItem, ...rest } = props
  const [radioGroupValue, setRadioGroupValue] = useState<any>(value)

  function setValue(value: any) {
    setRadioGroupValue(value)
    onChange && onChange(value)
  }

  const initialValue = { radioGroupValue, setRadioGroupValue: setValue, renderItem }

  if (renderItem) initialValue.renderItem = renderItem

  return (
    <RadioGroupProvider value={initialValue}>
      <Box ref={ref} left spaceX-8 {...rest}>
        {options.map((item, i) => {
          const radioProps: RadioProps = { disabled: item.disabled, value: item.value }

          if (renderItem) {
            radioProps.render = (state) => {
              const defaultRadio = defaultRender(state)
              return renderItem({ ...state, defaultRadio, item })
            }
          } else {
            radioProps.children = item.label
          }

          return <Radio key={i} {...radioProps}></Radio>
        })}
        {!options.length && children}
      </Box>
    </RadioGroupProvider>
  )
})
