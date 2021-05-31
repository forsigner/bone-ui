import React, { forwardRef } from 'react'
import { Box } from '@fower/react'
import { store } from '@fower/store'
import { FowerHTMLProps } from '@fower/types'

export interface InputProps extends Omit<FowerHTMLProps<'input'>, 'size'> {
  colorScheme?: keyof FowerTypes.Colors
  size?: 'small' | 'medium' | 'large'
  variant?: 'outline' | 'unstyled' | 'filled'
}

const sizes = {
  small: { px: 12, h: 32, text: 14 },
  medium: { px: 16, h: 40, text: 16 },
  large: { px: 16, h: 48, text: 18 },
}

export const Input = forwardRef<HTMLInputElement, Partial<InputProps>>((props, ref) => {
  const { colorScheme = 'brand500', size = 'medium', variant = 'outline', ...rest } = props
  const { disabled } = props
  const shadowColor = store.theme.colors[colorScheme]

  const variants = {
    outline: {
      border: true,
      borderColor: 'gray300',
    },
    filled: {
      bgGray100: true,
      border: true,
      borderColor: 'transparent',
      'bgGray200--hover': !disabled,
    },
    unstyled: {
      border: 'none',
      'border--focus': 'none',
      'shadow--focus': 'none',
      px: 0,
    },
  }

  return (
    <Box
      as="input"
      className="bone-input"
      ref={ref}
      rounded-6
      w-100p
      gray800
      bgTransparent--focus
      bgWhite
      outlineNone
      opacity-40={!!disabled}
      cursorNotAllowed={!!disabled}
      shadow--focus={`0 0 0 1px ${shadowColor}`}
      borderColor--focus={`${shadowColor}`}
      css={{ transition: 'box-shadow 0.4s, border 0.1s' }}
      {...sizes[size]}
      {...variants[variant]}
      {...rest}
    ></Box>
  )
})
