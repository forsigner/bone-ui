import React, { FC, useMemo, useState } from 'react'
import { forwardRef } from '@bone-ui/utils'
import { Box } from '@fower/react'
import { RadioGroupProvider } from './radioGroupContext'
import { Radio } from './Radio'
import { defaultRender } from './defaultRender'
import { RadioGroupProps, RadioProps } from './types'
import { RadioGroupContext } from './radioGroupContext'
import { useId } from '@bone-ui/hooks'

export const RadioGroup: FC<RadioGroupProps> = forwardRef((props: RadioGroupProps, ref) => {
  const { children, onChange, value, options = [], renderItem, ...rest } = props
  const [radioGroupValue, setRadioGroupValue] = useState<any>(value)

  function setValue(value: any) {
    setRadioGroupValue(value)
    onChange && onChange(value)
  }

  const name = useId(undefined, 'radio')

  const initialValue: RadioGroupContext = useMemo(
    () => ({
      name,
      radioGroupValue,
      setRadioGroupValue: setValue,
      renderItem,
    }),
    [radioGroupValue, setRadioGroupValue],
  )

  if (renderItem) initialValue.renderItem = renderItem

  return (
    <RadioGroupProvider value={initialValue}>
      <Box ref={ref} toLeft spaceX-8 {...rest}>
        {options.map((item, i) => {
          const radioProps: RadioProps = {
            disabled: item.disabled,
            value: item.value,
            name: initialValue.name,
          }

          if (renderItem) {
            radioProps.render = (state) => {
              const defaultRadio = defaultRender(state)
              return renderItem({ ...state, defaultRadio, item, i })
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
