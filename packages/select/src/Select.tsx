import React, { forwardRef, useState } from 'react'
import { Radio, RadioGroupProvider, RadioProps } from '@bone-ui/radio'
import { SelectProps } from './types'
import { defaultRender } from './defaultRender'
import { Box } from '@fower/react'
import { ChevronDownSolid } from '@bone-ui/icons/lib/ChevronDownSolid'
import { Dropdown, DropdownContent, DropdownTrigger } from '@bone-ui/dropdown'

export const Select = forwardRef<HTMLDivElement, SelectProps>((props, ref) => {
  const {
    children,
    onChange,
    value,
    options = [],
    renderItem = defaultRender,
    renderTrigger,
    width = 120,
    ...rest
  } = props
  const [selectValue, setSelectValue] = useState<any>(value)

  function setValue(value: any) {
    setSelectValue(value)
    onChange && onChange(value)
  }

  const initialValue = { radioGroupValue: selectValue, setRadioGroupValue: setValue, renderItem }

  if (renderItem) initialValue.renderItem = renderItem

  const option = options.find((i) => i.value === selectValue)

  return (
    <RadioGroupProvider value={initialValue}>
      <Dropdown ref={ref} placement="bottom" className="bone-ui-select" {...(rest as any)}>
        <DropdownTrigger h-100p>
          {({ isOpen }: any) => {
            if (renderTrigger) return renderTrigger({ isOpen, item: option })
            return (
              <Box
                toBetween
                toCenterY
                pl-12
                pr-8
                border-1
                borderBrand500={isOpen}
                rounded-4
                style={{ width }}
                h-36
                cursorPointer
              >
                <Box ellipsis={width - 20}>{option?.label}</Box>
                <ChevronDownSolid size={14}></ChevronDownSolid>
              </Box>
            )
          }}
        </DropdownTrigger>
        <DropdownContent style={{ width }}>
          {({ close }: any) => (
            <>
              {options.map((item, i) => {
                const radioProps: RadioProps = { disabled: item.disabled, value: item.value }

                if (renderItem) {
                  radioProps.render = (state) => {
                    const defaultRadio = defaultRender({ ...state, item })
                    return renderItem({ ...state, defaultRadio, item })
                  }
                }

                return (
                  <Radio key={i} onClick={close} {...radioProps} render={radioProps.render}></Radio>
                )
              })}

              {!options.length && children}
            </>
          )}
        </DropdownContent>
      </Dropdown>
    </RadioGroupProvider>
  )
})
