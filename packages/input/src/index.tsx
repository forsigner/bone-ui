import React, { forwardRef } from 'react'
import { Input as StyliInput } from '@styli/react'
import { styli } from '@styli/core'
import { StyliHTMLProps } from '@styli/types'

export interface InputProps extends Omit<StyliHTMLProps<'input'>, 'size'> {
  colorScheme?: string
  size?: 'small' | 'medium' | 'large'
  variant?: 'outline' | 'unstyled' | 'filled'
}

const sizes = {
  small: { px: 12, h: 32, f: 14 },
  medium: { px: 16, h: 40, f: 16 },
  large: { px: 16, h: 48, f: 18 },
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    colorScheme: colorSchema = 'primary',
    size = 'medium',
    variant = 'outline',
    ...rest
  } = props
  const { disabled } = props
  const colors = styli.getColors()
  const shadowColor = colors[colorSchema] || 'primay'

  const variants = {
    outline: {
      border: true,
      borderColor: 'gray40',
      'borderColor--hover': disabled ? false : `gray50`,
    },
    filled: {
      bgGray20: true,
      border: true,
      borderColor: 'transparent',
      'bgGray30--hover': !disabled,
      'bgGray30-T100--focus': true,
    },
    unstyled: {
      border: 'none',
      'border--focus': 'none',
      'shadow--focus': 'none',
      px: 0,
    },
  }

  return (
    <StyliInput
      className="bone-input"
      ref={ref}
      rounded-6
      w-100p
      gray60
      bgWhite
      outlineNone
      opacity-40={disabled}
      cursorNotAllowed={disabled}
      borderColor--focus={`${styli.getColorValue(colorSchema)} !important`}
      shadow--focus={`0 0 0 1px ${shadowColor}`}
      css={{ transition: 'all 0.2s' }}
      {...sizes[size]}
      {...variants[variant]}
      {...rest}
    ></StyliInput>
  )
})
