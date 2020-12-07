import React, { forwardRef, useMemo } from 'react'
import { Box } from '@styli/react'
import { CheckboxGroupProvider } from './checkboxGroupContext'
import { useCheckboxGroup } from './useCheckboxGroup'
import { CheckboxGroupProps, CheckboxGroupContext } from './types'

export const CheckboxGroup = forwardRef<HTMLInputElement, CheckboxGroupProps>((props, ref) => {
  const {
    value: prpoValue,
    onChange: onChangeProp,
    defaultValue,
    options,
    name,
    children,
    ...rest
  } = props
  const { value, onChange, setValue, controlled } = useCheckboxGroup(props)

  const contextValue: CheckboxGroupContext = useMemo(
    () => ({ controlled, onChange, value, setValue }),
    [controlled, value, onChange, setValue],
  )

  return (
    <CheckboxGroupProvider value={contextValue}>
      <Box ref={ref} left spaceX-8 {...(rest as any)}>
        {children}
      </Box>
    </CheckboxGroupProvider>
  )
})
