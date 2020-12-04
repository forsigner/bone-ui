import React, { forwardRef, ReactNode, useContext } from 'react'
import { Box } from '@styli/react'
import { StyliColor } from '@styli/types'
import { Radio, RadioProps, radioGroupContext } from '@bone-ui/radio'

export interface TabProps extends RadioProps {
  colorScheme?: StyliColor

  offColorScheme?: StyliColor

  /**
   * Switch size, you can set any size
   */
  label?: ReactNode
}

export const Tab = forwardRef<HTMLInputElement, TabProps>((props, ref) => {
  const { colorScheme = 'primary', offColorScheme = 'gray40', label, ...rest } = props

  const context = useContext(radioGroupContext)
  return (
    <Radio
      {...rest}
      ref={ref}
      value={props.value || (props.label as any)}
      shouldRenderChildren={false}
      render={({ checked, disabled }) => {
        if (context?.renderItem) {
          return context?.renderItem({
            checked,
            disabled,
            item: { label: props.label, value: props.value },
          } as any)
        }
        return (
          <Box borderColor={checked ? 'primary' : 'transparent'} borderB-2 py2 px1 mb--1 f-16>
            {label}
          </Box>
        )
      }}
    />
  )
})
