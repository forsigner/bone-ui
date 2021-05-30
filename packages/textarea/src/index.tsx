import React, { forwardRef } from 'react'
import { store } from '@fower/store'
import { Box } from '@fower/react'
import { FowerHTMLProps } from '@fower/types'

export interface TextareaProps extends FowerHTMLProps<'textarea'> {
  colorScheme?: keyof FowerTypes.Colors
  size?: 'small' | 'medium' | 'large'
  variant?: 'outline' | 'unstyled' | 'filled'
}

export const Textarea = forwardRef<HTMLInputElement, Partial<TextareaProps>>((props, ref) => {
  const { colorScheme = 'brand500', size = 'medium', variant = 'outline', ...rest } = props
  const { disabled } = props

  const color = store.theme.colors[colorScheme]

  const variants = {
    outline: {
      border: true,
      'borderColor--focus': color,
      'shadow--focus': `0 0 0 1px ${color}`,
    },
    filled: {
      bgGray100: true,
      border: true,
      borderTransparent: true,
      'bgGray200--hover': !disabled,
      'borderColor--focus': color,
      'shadow--focus': `0 0 0 1px ${color}`,
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
      className="bone-textarea"
      as="textarea"
      ref={ref}
      rounded-6
      w-100p
      minH-100
      pl-16
      pr-8
      py-8
      gray800
      bgWhite
      outlineNone
      opacity-40={!!disabled}
      bgTransparent--focus
      cursorNotAllowed={!!disabled}
      css={{ transition: 'border 0.4s, background-color 0.4s' }}
      {...variants[variant]}
      {...(rest as any)}
    />
  )
})
