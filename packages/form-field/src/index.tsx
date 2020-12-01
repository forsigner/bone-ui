import React, { forwardRef } from 'react'
import { Box } from '@styli/react'
import { StyliHTMLProps } from '@styli/types'

export interface FormFieldProps extends StyliHTMLProps<'div'> {
  orientation?: 'horizontal' | 'vertical'

  label?: string

  error?: string
}

export const FormField = forwardRef<HTMLDivElement, FormFieldProps>((props, ref) => {
  const { orientation = 'vertical', children, error, label, ...rest } = props
  const isHorizontal = orientation === 'horizontal'

  return (
    <Box className="bone-form-field " ref={ref} relative column={!isHorizontal} {...rest}>
      <Box
        className="bone-form-field-label"
        f-16
        right={isHorizontal}
        left={!isHorizontal}
        centerY
        h-40
        w-80={isHorizontal}
        pr-8
      >
        {label}
      </Box>
      <Box className="bone-form-field-control" column flex-1 mb-32={!error}>
        <Box minH-40 centerY left>
          {children}
        </Box>
        {error && (
          <Box h-32 red40>
            {error}
          </Box>
        )}
      </Box>
    </Box>
  )
})
