import React, { forwardRef, memo } from 'react'
import { Box } from '@fower/react'
import { FowerColor, FowerHTMLProps } from '@fower/types'
import { Checkbox } from '@bone-ui/checkbox'

export interface SwitchProps extends FowerHTMLProps<'input'> {
  colorScheme?: FowerColor

  offColorScheme?: FowerColor

  /**
   * Switch size, you can set any size
   */
  size?: number

  /**
   * Aspect ratio for siwtch
   */
  aspectRatio?: number
}

export const Switch = memo(
  forwardRef<HTMLInputElement, Partial<SwitchProps>>((props, ref) => {
    const {
      colorScheme = 'brand500',
      offColorScheme = 'gray400',
      size = 20,
      aspectRatio = 1.8,
      ...rest
    } = props
    const width = size * aspectRatio
    const borderWidth = Math.ceil(size / 10)

    return (
      <Checkbox
        {...rest}
        ref={ref}
        render={({ checked }) => {
          const x = checked ? `${width - size}px` : '0px'
          const currentColor = checked ? colorScheme : offColorScheme
          return (
            <Box
              h={size}
              w={width}
              rounded-9999
              border={borderWidth}
              borderColor={currentColor}
              bg={currentColor}
              css={{ boxSizing: 'content-box' }}
            >
              <Box
                circle={size}
                bgWhite
                css={{
                  transform: `translateX(${x})`,
                  transition: 'transform ease 250ms',
                }}
              ></Box>
            </Box>
          )
        }}
      ></Checkbox>
    )
  }),
)
