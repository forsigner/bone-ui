import React, { ChangeEvent, forwardRef } from 'react'
import { cx } from '@bone-ui/utils'
import { css } from '@fower/core'
import { Box } from '@fower/react'
import { styled } from '@fower/styled'
import { useCheckbox } from './useCheckbox'
import { CheckboxProps } from './types'
import { useCheckboxGroupContext } from './checkboxGroupContext'
import { checkboxDefaultRender } from './checkboxDefaultRender'

const Label = styled('label')

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const {
    children,
    render = checkboxDefaultRender,
    value,
    disabled: propDisabled,
    onChange: propOnChnage,
    ...rest
  } = props
  const context = useCheckboxGroupContext()

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    context?.onChange(e)
    return props?.onChange?.(e)
  }

  const { inputProps, state } = useCheckbox({ ...props, onChange })
  const { disabled } = state

  return (
    <Label
      className="bone-checkbox"
      inlineFlex
      toCenterY
      toLeft
      cursorPointer={!disabled}
      cursorNotAllowed={disabled}
      opacity-50={disabled}
      // TODO: 属性多余
      {...(rest as any)}
    >
      <input
        ref={ref}
        className={cx('bone-radio__input', css('square0', 'opacity-0', 'hidden'))}
        type="checkbox"
        value={value}
        {...inputProps}
      />

      {render({ ...state, children })}

      {children && (
        <Box className="bone-checkbox__label" ml-8 leading-1em>
          {children}
        </Box>
      )}
    </Label>
  )
})
