import React, { forwardRef } from 'react'
import { Box, Input } from '@styli/react'
import { styled } from '@styli/styled'
import { CheckOutline } from '@bone-ui/icons/lib/CheckOutline'
import { useCheckbox } from './useCheckbox'
import { CheckboxStatus, CheckboxProps } from './types'

const Label = styled('label')

const defaultRender = ({ checked }: CheckboxStatus) => (
  <Box
    center
    s-20
    border-2
    rounded-4
    borderGray40={!checked}
    borderPrimary={checked}
    bgPrimary={checked}
  >
    <CheckOutline white s-20 strokeWidth={4} hide={!checked}></CheckOutline>
  </Box>
)

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const { children, render = defaultRender, ...rest } = props
  const { inputProps, state } = useCheckbox(props)
  const { disabled } = state

  return (
    <Label
      inlineFlex
      className="bone-checkbox"
      centerY
      left
      cursorPointer={!disabled}
      cursorNotAllowed={disabled}
      opacity-50={disabled}
    >
      <Input
        className="bone-checkbox__input"
        ref={ref}
        type="checkbox"
        s-0
        reset
        opacity-0
        {...inputProps}
        {...rest}
      />

      {render({ ...state, children })}

      {children && (
        <Box className="bone-checkbox__label" ml-8 lh-1em>
          {children}
        </Box>
      )}
    </Label>
  )
})
