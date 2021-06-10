import React, { FC } from 'react'
import { forwardRef, __DEV__ } from '@bone-ui/utils'
import { Box } from '@fower/react'
import { store } from '@fower/store'
import { FowerHTMLProps, AtomicProps } from '@fower/types'
import { Placement, useInputGroupContext } from './context'
import { Id } from './types'

export interface InputProps extends Omit<FowerHTMLProps<'input'>, 'size'> {
  colorScheme?: keyof FowerTypes.Colors
  size?: 'sm' | 'md' | 'lg'
  variant?: 'outline' | 'unstyled' | 'filled'
}

const sizes = {
  sm: { px: 12, h: 32, text: 14 },
  md: { px: 16, h: 40, text: 16 },
  lg: { px: 16, h: 48, text: 18 },
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

export const Input: FC<InputProps> = forwardRef((props: InputProps, ref) => {
  const { colorScheme = 'brand500', size = 'md', variant = 'outline', ...rest } = props
  const { disabled } = props
  const shadowColor = store.theme.colors[colorScheme]
  const sizesStyle = sizes[size]

  const attrs = useStyles(props, sizesStyle.h)

  const variants = {
    outline: {
      border: true,
      borderGray300: true,
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
      w-100p
      gray800
      bgTransparent--focus
      bgWhite
      outlineNone
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
