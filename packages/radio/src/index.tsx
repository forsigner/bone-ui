import React, { forwardRef } from 'react'
import { Input } from '@styli/react'
import { StyliHTMLProps, StyliColor } from '@styli/types'
import { useClickAway } from '@bone-ui/hooks'

export interface RadioProps extends StyliHTMLProps<'div'> {
  colorScheme?: StyliColor
}
export const Radio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const { colorScheme = 'primary', ...rest } = props
  const radioRef = useClickAway(() => {
    console.log('away.....')
  })

  return (
    <div ref={ref as any}>
      <div>away</div>
      <Input type="radio" ref={radioRef as any} {...rest} />
    </div>
  )
})
