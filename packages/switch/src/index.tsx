import React, { forwardRef, useEffect, useState } from 'react'
import { Box, Input } from '@styli/react'
import { styled } from '@styli/styled'
import { StyliHTMLProps } from '@styli/types'

const Label = styled('label')

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>
export interface SwitchProps extends StyliHTMLProps<'input'> {}

function useCheckbox(props: InputProps) {
  /** hooks */
  const [disabled, setDisabled] = useState(props.disabled ?? false)
  const [checked, setChecked] = useState(props.checked || props.defaultChecked || false)

  useEffect(() => {
    if (typeof props.checked !== 'boolean') return
    setChecked(!!props.checked)
  }, [props.checked])

  useEffect(() => {
    if (typeof props.disabled !== 'boolean') return
    setDisabled(!!props.disabled)
  }, [props.disabled])

  let inputProps: InputProps = {
    onChange(e) {
      const { checked } = e.target
      setChecked(checked)
    },
  }
  return { inputProps, checked, disabled }
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>((props, ref) => {
  const { children, ...rest } = props

  const { inputProps, checked, disabled } = useCheckbox(props)

  console.log('checked:', checked)

  const width = 40
  const height = 20
  const x = checked ? `${width - height}px` : '0px'

  return (
    <Label className="bone-switch" centerY left cursorPointer>
      <Input
        className="bone-switch__input"
        ref={ref}
        type="checkbox"
        s-0
        reset // TODO: 不应该在这里 reset
        opacity-0
        {...inputProps}
        {...rest}
      />
      <Box
        h-20
        w={width}
        rounded-9999
        border-2
        borderColor={checked ? 'primary' : 'gray40'}
        bg={checked ? 'primary' : 'gray40'}
        cursorNotAllowed={disabled}
        opacity-40={disabled}
        css={{ boxSizing: 'content-box' }}
      >
        <Box
          circle={height}
          bgWhite
          css={{
            transform: `translateX(${x})`,
            transition: 'transform 250ms ease 0s',
          }}
        ></Box>
      </Box>
      {children && (
        <Box className="bone-switch__label" lh-1em>
          {children}
        </Box>
      )}
    </Label>
  )
})
