import React, { forwardRef } from 'react'
import { StyliColor, StyliHTMLProps } from '@styli/types'
import { getColorValue } from '@styli/core'
import { styled } from '@styli/styled'

const StyledButton = styled('button')

const sizes = {
  xs: {
    h: 24,
    minW: 24,
    f0: true,
    px: 8,
  },
  sm: {
    h: 32,
    minW: 32,
    f1: true,
    px: 12,
  },
  md: {
    h: 40,
    minW: 40,
    f2: true,
    px: 16,
  },
  lg: {
    h: 48,
    minW: 48,
    f3: true,
    px: 24,
  },
}

export interface ButtonProps extends StyliHTMLProps<'button'> {
  colorScheme?: StyliColor

  size?: 'xs' | 'sm' | 'md' | 'lg' | number

  variant?: 'solid' | 'outline' | 'ghost'

  leftIcon?: React.ReactElement

  rightIcon?: React.ReactElement

  disabled?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    size = 'md',
    variant = 'solid',
    leftIcon,
    rightIcon,
    colorScheme = 'primary',
    disabled,
    children,
    ...rest
  } = props

  const sizeStyle = typeof size === 'string' ? sizes[size] : {}

  return (
    <StyledButton
      ref={ref}
      as="button"
      inlineFlex
      center
      bg="none"
      border-0
      outlineNone
      cursorPointer
      rounded-4
      opacity-40={disabled}
      cursorNotAllowed={disabled}
      css={{
        appearance: 'none',
        userSelect: 'none',
        whiteSpace: 'nowrap',
        verticalAlign: 'middle',
        transition: 'all 250ms ease 0s',
      }}
      {...getVariantMap(colorScheme, disabled)[variant]}
      {...sizeStyle}
      {...rest}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </StyledButton>
  )
})

function getVariantMap(color: string, disabled = false) {
  return {
    solid: {
      white: true,
      bgColor: color,
      ...(disabled
        ? {}
        : {
            'bgColor--hover': `${color}-D8`,
            'bgColor--active': `${color}-D20`,
            'shadow--focus': `0 0 0 2px ${getColorValue(color + '-T60')}`,
          }),
    },
    ghost: {
      color,
      ...(disabled
        ? {}
        : {
            'bgColor--hover': `${color}-T80`,
            'bgColor--active': `${color}-T90`,
            'shadow--focus': `0 0 0 2px ${getColorValue(color + '-T60')}`,
          }),
    },
    outline: {
      color,
      border: `1px solid ${getColorValue(color)}`,
      ...(disabled
        ? {}
        : {
            'bgColor--hover': `${color}-T80`,
            'bgColor--active': `${color}-T90`,
            'shadow--focus': `0 0 0 2px ${getColorValue(color + '-T60')}`,
          }),
    },
  }
}
