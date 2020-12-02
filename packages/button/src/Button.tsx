import React, { cloneElement, forwardRef } from 'react'
import { StyliColor } from '@styli/types'
import { BoxComponent } from '@styli/react'
import { styled } from '@styli/styled'
import { styli } from '@styli/core'
import { Spinner } from '@bone-ui/spinner'

type Size = 'xs' | 'sm' | 'md' | 'lg' | number

export interface ButtonProps {
  colorScheme?: StyliColor

  colorMode?: 'dark' | 'light'

  size?: Size

  variant?: 'default' | 'solid' | 'outline'

  leftIcon?: React.ReactElement

  rightIcon?: React.ReactElement

  icon?: React.ReactElement

  disabled?: boolean

  loading?: boolean
}

export const Button: BoxComponent<'button', ButtonProps> = forwardRef((props: ButtonProps, ref) => {
  const {
    as = 'button',
    size = 'md',
    variant = 'default',
    leftIcon,
    rightIcon,
    icon,
    colorScheme = '#444',
    colorMode = 'dark',
    disabled,
    loading,
    children,
    ...rest
  } = props as any

  const sizeStyle = getSizeStyle(size)
  const isSolid = variant === 'solid'
  const isLight = colorMode === 'light'
  const notAllowed = disabled || loading
  const Comp = styled(as)

  const iconButtonProps = icon ? { px0: !!icon, w: sizeStyle.h } : {}

  return (
    <Comp
      ref={ref}
      className="bone-button"
      inlineFlex
      center
      bg="none"
      border="none"
      lh-1em
      outlineNone
      cursorPointer
      rounded-4
      opacity-40={notAllowed}
      cursorNotAllowed={notAllowed}
      css={{
        appearance: 'none',
        userSelect: 'none',
        whiteSpace: 'nowrap',
        verticalAlign: 'middle',
        transition: 'all 250ms ease 0s',
      }}
      {...getVariantStyle(colorScheme, notAllowed, colorMode)[variant]}
      {...sizeStyle}
      {...iconButtonProps}
      {...rest}
    >
      {loading && (
        <Spinner
          mr-8
          c={isSolid ? (isLight ? `${colorScheme}-D30` : 'white') : colorScheme}
          s={sizeStyle.f}
        ></Spinner>
      )}

      {icon}

      {leftIcon && cloneElement(leftIcon, { mr: 8, s: sizeStyle.f })}
      {children}
      {rightIcon && cloneElement(rightIcon, { ml: 8, s: sizeStyle.f })}
    </Comp>
  )
}) as any

function getVariantStyle(color: string, notAllowed: any = null, colorMode: string): any {
  const isLight = colorMode === 'light'
  return {
    default: {
      border: true,
      borderColor: 'gray30',
      'bg--hover': `gray30-T70`,
      'bg--active': `gray30-T40`,
      // 'borderColor--hover': 'gray30-D10',
      color,
      'color--hover': `${color}-D20`,
    },
    solid: {
      c: isLight ? `${color}-D30` : 'white',
      bg: isLight ? `${color}-T60` : color,
      ...(notAllowed ?? {
        'bg--hover': isLight ? `${color}-T30` : `${color}-D8`,
        'bg--active': isLight ? `${color}-T10` : `${color}-D20`,
        // 'shadow--focus': isLight ? 'none' : `0 0 0 2px ${styli.getColorValue(color + '-T70')}`,
      }),
    },
    outline: {
      color,
      border: true,
      borderColor: styli.getColorValue(color),
      ...(notAllowed ?? {
        'bg--hover': `${color}-T80`,
        'bg--active': `${color}-T90`,
        // 'shadow--focus': `0 0 0 2px ${styli.getColorValue(color + '-T70')}`,
      }),
    },
  }
}

function getSizeStyle(size: Size) {
  const sizes = {
    xs: { h: 24, f: 12, px: 12 },
    sm: { h: 32, f: 14, px: 16 },
    md: { h: 40, f: 16, px: 20 },
    lg: { h: 48, f: 18, px: 24 },
  }
  if (typeof size === 'string') return sizes[size]
  return { h: size, px: size * 0.5, f: size * 0.35 }
}
