import React, { FC } from 'react'
import { forwardRef, __DEV__ } from '@bone-ui/utils'
import { Box } from '@fower/react'
import { store } from '@fower/store'
import { FowerHTMLProps, AtomicProps } from '@fower/types'
import { Placement, useInputGroupContext } from './context'

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

export const Input: FC<InputProps> = forwardRef((props: InputProps, ref) => {
  const { colorScheme = 'brand500', size = 'md', variant = 'outline', ...rest } = props
  const { disabled } = props
  const shadowColor = store.theme.colors[colorScheme]

  const ctx = useInputGroupContext()
  let attrs: AtomicProps = {}

  if (ctx.placement) {
    const { placement } = ctx
    const placementValue = placement.get(props)

    ;(attrs as any)['zIndex--focus'] = 1

    if (placementValue === Placement.middle) {
      attrs.borderL = 1
      attrs.roundedNone = true
    }

    if (placementValue === Placement.start) {
      attrs.borderL = 1
      attrs.roundedLMD = true
    }

    if (placementValue === Placement.end) {
      attrs.borderR = 1
      attrs.roundedRMD = true
    }
  }

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
      rounded
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
      {...sizes[size]}
      {...variants[variant]}
      {...(attrs as any)}
      {...rest}
    />
  )
})

if (__DEV__) {
  Input.displayName = 'Input'
}
