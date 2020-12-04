import React, { forwardRef, memo } from 'react'
import { Box, Input } from '@styli/react'
import { styled } from '@styli/styled'
import { useRadio } from './useRadio'
import { defaultRender } from './defaultRender'
import { RadioProps } from './types'

const Label = styled('label')

export const Radio = memo(
  forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
    const { children, shouldRenderChildren = true, render = defaultRender, ...rest } = props
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

        {shouldRenderChildren && children && (
          <Box className="bone-radio__label" ml-8>
            {children}
          </Box>
        )}
      </Label>
    )
  }),
)
