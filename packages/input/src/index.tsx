import React, { forwardRef, InputHTMLAttributes } from 'react'
import { Input as StyliInput } from '@styli/react'
import { AtomicProps } from '@styli/types'
import { styli } from '@styli/core'

type OmitInputHTMLAttributes = Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'color'>

export interface InputProps
  extends React.DetailedHTMLProps<OmitInputHTMLAttributes, HTMLInputElement>,
    AtomicProps {
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
    colorScheme: colorSchema = 'blue50',
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
      'border--hover': disabled ? false : '1px solid gray70',
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
      border--focus={`1px solid ${colorSchema}`}
      shadow--focus={`0 0 0 1px ${shadowColor}`}
      css={{ transition: 'all 0.3s' }}
      {...sizes[size]}
      {...variants[variant]}
      {...(rest as any)}
    ></StyliInput>
  )
})
