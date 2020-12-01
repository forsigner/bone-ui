import React, { forwardRef, useContext } from 'react'
import { Box, Input } from '@styli/react'
import { styled } from '@styli/styled'
import { StyliHTMLProps } from '@styli/types'
import { radioGroupContext } from './radioGroupContext'

const Label = styled('label')

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>
export interface RadioProps extends StyliHTMLProps<'input'> {}

export const Radio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const { children, onChange, value, ...rest } = props
  const radioProps = useCheckboxProps(props)
  const checked = radioProps.checked || props.checked

  return (
    <Label className="bone-radio" centerY left cursorPointer>
      <Input
        className="bone-radio__input"
        ref={ref}
        type="radio"
        s-0
        opacity-0
        {...radioProps}
        {...rest}
      />

      <Box
        center
        circle-20
        border-2
        borderGray40={!checked}
        borderPrimary={checked}
        overflow="hidden"
      >
        <Box circle-8 bgPrimary hide={!checked}></Box>
      </Box>

      {children && (
        <Box className="bone-radio__label" ml-8>
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
function useCheckboxProps(props: InputProps) {
  let radioProps: InputProps = {}
  const { value, onChange } = props
  const context = useContext(radioGroupContext)

  if (!context) return radioProps

  const { radioGroupValue, setRadioGroupValue } = context
  radioProps = {
    checked: value === radioGroupValue,
    onChange: (e) => {
      const { checked } = e.target
      if (checked) setRadioGroupValue(value)
      onChange && onChange(e)
    },
  }

  return radioProps
}
