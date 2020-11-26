import React, { forwardRef } from 'react'
import { Button as StyleButton } from '@styli/react'
import { StyliHTMLProps } from '@styli/types'
import { getColorValue } from '@styli/core'

type ButtonSize = 'xs' | 'sm' | 'md' | 'lg'
type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'link'

export interface ButtonProps extends StyliHTMLProps<'div'> {
  text: string
  colorScheme?: string
  size?: ButtonSize
  variant?: ButtonVariant
  leftIcon?: React.ReactElement
  rightIcon?: React.ReactElement
  disabled?: boolean
}

export const Button = forwardRef<HTMLDivElement, ButtonProps>((props, ref) => {
  const { size = 'md', variant = 'solid', text, leftIcon, rightIcon, colorScheme = 'blue50', disabled, ...rest } = props
  const atomicProps: any = rest

  return (
    <StyleButton
      ref={ref}
      centerY
      bg="none"
      border="0"
      outlineNone
      cursorPointer
      appearance="none"
      userSelect="none"
      rounded="0.375rem"
      whiteSpace="nowrap"
      verticalAlign="middle"
      transition="all 250ms ease 0s"
      opacity-40={disabled}
      cursorNotAllowed={disabled}
      {...getVariantMap(colorScheme, disabled)[variant]}
      {...getSizeMap()[size]}
      {...atomicProps}
    >
      {leftIcon}
      {text}
      {rightIcon}
    </StyleButton>
  )
})

function getVariantMap(color: string, disabled = false) {
  return {
    solid: {
      white: true,
      bgColor: color,
      ...disabled ? {} : {
        'bgColor--hover': `${color}-D10`,
        'bgColor--active': `${color}-D10`,
        'shadow--focus': `0 0 0 .2rem ${getColorValue(color + '-T50')}`,
      },
    },
    ghost: {
      color,
      ...disabled ? {} : {
        'bgColor--hover': `${color}-T90`,
        'bgColor--active': `${color}-T90`,
        'shadow--focus': `0 0 0 .2rem ${getColorValue(color + '-T50')}`,
      }
    },
    outline: {
      color,
      border: `1px solid ${getColorValue(color)}`,
      ...disabled ? {} : {
        'bgColor--hover': `${color}-T90`,
        'bgColor--active': `${color}-T90`,
        'shadow--focus': `0 0 0 .2rem ${getColorValue(color + '-T50')}`,
      }
    },
  }
}

function getSizeMap() {
  return {
    xs: {
      h: '1.5rem',
      minW: '1.5rem',
      f0: true,
      px: '0.5rem',
    },
    sm: {
      h: '2rem',
      minW: '2rem',
      f1: true,
      px: '0.75rem',
    },
    md: {
      h: '2.5rem',
      minW: '2.5rem',
      f2: true,
      px: '1rem',
    },
    lg: {
      h: '3rem',
      minW: '3rem',
      f3: true,
      px: '1.25rem',
    }
  }
}