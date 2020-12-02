import React, { forwardRef } from 'react'
import { Box, Input } from '@styli/react'
import { styled } from '@styli/styled'
import { useRadio } from './useRadio'
import { RadioProps, RadioStatus } from './types'

const Label = styled('label')

const defaultRender = ({ checked }: RadioStatus) => (
  <Box center circle-20 border-2 borderGray40={!checked} borderPrimary={checked} overflow="hidden">
    <Box circle-8 bgPrimary hide={!checked}></Box>
  </Box>
)

export const Radio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const { children, render = defaultRender, ...rest } = props
  const { inputProps, state } = useRadio(props)
  const { disabled } = state

  return (
    <Label
      className="bone-radio"
      centerY
      left
      cursorPointer={!disabled}
      cursorNotAllowed={disabled}
      opacity-50={disabled}
    >
      <Input
        className="bone-radio__input"
        ref={ref}
        type="radio"
        s-0
        opacity-0
        {...inputProps}
        {...rest}
      />

      {render({ ...state, children })}

      {children && (
        <Box className="bone-radio__label" ml-8>
          {children}
        </Box>
      )}
    </Label>
  )
})
