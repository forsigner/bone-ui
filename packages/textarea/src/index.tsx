import React, { forwardRef } from 'react'
import { styled } from '@styli/styled'
import { StyliHTMLProps } from '@styli/types'
import { styli } from '@styli/core'

const StyledTextarea = styled('textarea')

export interface TextareaProps extends StyliHTMLProps<'textarea'> {
  colorScheme?: string
  size?: 'small' | 'medium' | 'large'
  variant?: 'outline' | 'unstyled' | 'filled'
}

export const Textarea = forwardRef<HTMLInputElement, TextareaProps>((props, ref) => {
  const {
    colorScheme: colorSchema = 'primary',
    size = 'medium',
    variant = 'outline',
    ...rest
  } = props
  const { disabled } = props
  const colors = styli.getColors()
  const shadowColor = colors[colorSchema] || 'green'

  const variants = {
    outline: {
      border: '1px solid gray40',
      'border--hover': disabled ? false : '1px solid gray50',
    },
    filled: {
      bgGray20: true,
      border: '1px solid transparent',
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
    <StyledTextarea
      className="bone-textarea"
      ref={ref}
      rounded-6
      w-100p
      px-16-8
      gray60
      bgWhite
      outlineNone
      opacity-40={disabled}
      cursorNotAllowed={disabled}
      border--focus={`1px solid ${colorSchema}`}
      shadow--focus={`0 0 0 1px ${shadowColor}`}
      css={{ transition: 'all 0.3s' }}
      {...variants[variant]}
      {...(rest as any)}
    ></StyledTextarea>
  )
})
