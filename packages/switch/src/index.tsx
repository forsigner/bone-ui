import React, { forwardRef, memo } from 'react'
import { Box } from '@styli/react'
import { StyliColor, StyliHTMLProps } from '@styli/types'
import { Checkbox } from '@bone-ui/checkbox'

export interface SwitchProps extends StyliHTMLProps<'input'> {
  colorScheme?: StyliColor

  offColorScheme?: StyliColor

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
  forwardRef<HTMLInputElement, SwitchProps>((props, ref) => {
    const {
      colorScheme = 'primary',
      offColorScheme = 'gray40',
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
              borderWidth={borderWidth}
              borderColor={currentColor}
              bg={currentColor}
              css={{ boxSizing: 'content-box' }}
            >
              <Box
                circle={size}
                bgWhite
                css={{
                  transform: `translateX(${x})`,
                  transition: 'transform 250ms ease 0s',
                }}
              ></Box>
            </Box>
          )
        }}
      ></Checkbox>
    )
  }),
)
