import React, { FC, useMemo } from 'react'
import { forwardRef } from '@bone-ui/utils'
import { Box } from '@fower/react'
import { RadioGroupProvider } from './radioGroupContext'
import { Radio } from './Radio'
import { defaultRender } from './defaultRender'
import { RadioGroupContext, RadioGroupProps, RadioProps } from './types'
import { useRadioGroup } from './useRadioGroup'

function checkIsControlled(props: RadioGroupProps) {
  if (Reflect.has(props, 'value') && !Reflect.has(props, 'onChange')) {
    console.error(
      'when using radio group with controlled mode, value and onChange Props is required',
    )
  }
}

export const RadioGroup: FC<RadioGroupProps> = forwardRef((props: RadioGroupProps, ref) => {
  const {
    defaultValue,
    value: prpoValue,
    onChange: onChangeProp,
    options = [],
    renderItem,
    children,
    ...rest
  } = props

  const { value, onChange, setValue, controlled, name } = useRadioGroup(props)

  const initialValue: RadioGroupContext = useMemo(
    () => ({ controlled, onChange, value, setValue, name }),
    [controlled, value, onChange, setValue, name],
  )

  if (renderItem) initialValue.renderItem = renderItem

  checkIsControlled(props)

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
