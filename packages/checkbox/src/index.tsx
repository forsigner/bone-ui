import React, { forwardRef, useCallback, useState } from 'react'
import { View } from '@styli/react'
import { StyliHTMLProps, StyliColor } from '@styli/types'
import { useClickAway } from '@bone-ui/hooks'

export interface CheckboxProps extends StyliHTMLProps<'div'> {
  disabled?: boolean

  focused?: boolean

  onChange?(value: any): void
  onChange?(value: any): void

  colorScheme?: StyliColor
}
export const Checkbox = forwardRef<HTMLDivElement, CheckboxProps>((props, ref) => {
  const { colorScheme = 'primary', disabled, focused, onChange, children, ...rest } = props
  const [checked, setChecked] = useState(false)
  const [isFocused] = useState(false)
  const checkboxRef = useClickAway(() => {})

  const handleClick = useCallback(() => {
    if (disabled) return
    setChecked(!checked)
    onChange && onChange(!checked)
  }, [isFocused, checked, disabled])

  return (
    <View
      ref={ref}
      className="bone-checkbox"
      display="inline-flex"
      centerY
      cursor={disabled ? 'not-allowed' : 'pointer'}
      opacity-50={disabled}
      onClick={handleClick}
    >
      <View ref={checkboxRef as any} circle4 bg={checked ? 'primary' : 'gray40'} {...rest}></View>
      {children && <View ml-8>{children}</View>}
    </View>
  )
})
