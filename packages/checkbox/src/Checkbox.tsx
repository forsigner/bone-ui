import React, { forwardRef, useContext } from 'react'
import { Box, Input } from '@styli/react'
import { styled } from '@styli/styled'
import { StyliHTMLProps } from '@styli/types'
import { CheckOutline } from '@bone-ui/icons/lib/CheckOutline'
import { checkboxGroupContext } from './context'

const Label = styled('label')

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export interface CheckboxProps extends StyliHTMLProps<'input'> {}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const { children, ...rest } = props
  const checkboxProps = useCheckboxProps(props)
  const checked = checkboxProps.checked || props.checked

  return (
    <Label className="bone-checkbox" centerY left cursorPointer>
      <Input
        className="bone-checkbox__input"
        ref={ref}
        type="checkbox"
        s-0
        reset // TODO: 不应该在这里 reset
        opacity-0
        {...checkboxProps}
        {...rest}
      />
      <Box
        s-20
        border-2
        rounded-4
        borderGray40={!checked}
        borderPrimary={checked}
        bgPrimary={checked}
        center
        overflow="hidden"
      >
        <CheckOutline white s-20 strokeWidth={4} hide={!checked}></CheckOutline>
      </Box>
      {children && (
        <Box className="bone-checkbox__label" ml-8 lh-1em>
          {children}
        </Box>
      )}
    </Label>
  )
})

/**
 * Get checked and onChange handler
 * @param props
 */
function useCheckboxProps(props: CheckboxProps) {
  let checkboxProps: InputProps = {}
  const { value, onChange } = props
  const context = useContext(checkboxGroupContext)

  if (!context) return checkboxProps

  const { checkboxGroupValue, setCheckboxGroupValue } = context
  checkboxProps = {
    checked: checkboxGroupValue.includes(value),
    onChange: (e) => {
      const { checked } = e.target
      const newValue = checked
        ? [...checkboxGroupValue, value]
        : checkboxGroupValue.filter((i) => i !== value)

      setCheckboxGroupValue(newValue)
      onChange && onChange(e)
    },
  }

  return checkboxProps
}
