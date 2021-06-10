import React, { FC } from 'react'
import { forwardRef, __DEV__ } from '@bone-ui/utils'
import { Box } from '@fower/react'
import { store } from '@fower/store'
import { FowerHTMLProps, AtomicProps } from '@fower/types'
import { Placement, useInputGroupContext } from './context'
import { Id } from './types'

type Size = 'sm' | 'md' | 'lg' | number

export interface InputProps extends Omit<FowerHTMLProps<'input'>, 'size'> {
  colorScheme?: keyof FowerTypes.Colors
  size?: Size
  variant?: 'outline' | 'unstyled' | 'filled'
}

interface Attrs extends AtomicProps {
  [key: string]: any
}

function useStyles(props: InputProps, h: any) {
  let attrs: Attrs = { rounded: true }
  const ctx = useInputGroupContext()

  // pure input, not with input group
  if (!ctx.placementMap) return attrs

  const { placementMap } = ctx
  const { placement } = placementMap.get(props)!
  const mapArr = Array.from(placementMap.values())
  const first = mapArr[0]
  const last = mapArr.pop()

  if (first.id === Id.InputElement) {
    attrs['pl--i'] = h
  }

  if (last?.id === Id.InputElement) {
    attrs['pr--i'] = h
  }

  if (first.id === Id.InputAddon) {
    attrs['roundedL--i'] = 0
  }

  if (last?.id === Id.InputAddon) {
    attrs['roundedR--i'] = 0
  }

  attrs['zIndex--focus'] = 1

  if (placement === Placement.middle) {
    attrs.borderL = 1
  }

  if (placement === Placement.start) {
    attrs.borderL = 1
  }

  if (placement === Placement.end) {
    attrs.borderR = 1
  }

  return attrs
}

interface Sizes {
  [key: string]: {
    h: number
    text: number
    px?: number
  }
}

function getSizeStyle(size: Size) {
  const sizes: Sizes = {
    sm: { px: 12, h: 32, text: 14 },
    md: { px: 16, h: 40, text: 16 },
    lg: { px: 16, h: 48, text: 18 },
  }

  if (typeof size === 'string') return sizes[size]
  return {
    h: size,
    px: size * 0.35,
    text: size * 0.35,
    rounded: size * 0.1,
  }
}

export const Input: FC<InputProps> = forwardRef((props: InputProps, ref) => {
  const { colorScheme = 'brand500', size = 'md', variant = 'outline', ...rest } = props
  const { disabled } = props
  const shadowColor = store.theme.colors[colorScheme]
  const sizesStyle = getSizeStyle(size)

  const attrs = useStyles(props, sizesStyle.h)

  const variants = {
    outline: {
      border: true,
      borderGray200: true,
    },
    filled: {
      bgGray100: true,
      border: true,
      borderColor: 'transparent',
      'bgGray100--D4--hover': !disabled,
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
      w-100p
      gray800
      bgTransparent--focus
      bgWhite
      outlineNone
      placeholderGray400
      opacity-40={!!disabled}
      cursorNotAllowed={!!disabled}
      shadow--focus={`0 0 0 1px ${shadowColor}`}
      borderColor--focus={`${shadowColor}`}
      transitionCommon
      duration-300
      {...sizesStyle}
      {...variants[variant]}
      {...(attrs as any)}
      {...rest}
    />
  )
})

if (__DEV__) {
  Input.displayName = 'Input'
}

;(Input as any).id = 'Input'
