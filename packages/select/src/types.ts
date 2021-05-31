import { FowerHTMLProps } from '@fower/types'
import { RadioOption, RenderItem } from '@bone-ui/radio'
import { ReactNode } from 'react'

type StringOrNumber = string | number

interface RenderTriggerProps {
  isOpen: boolean
  item?: RadioOption
}

export type RenderTrigger = (props: RenderTriggerProps) => ReactNode

export interface SelectProps extends Omit<FowerHTMLProps<'div'>, 'onChange'> {
  disabled?: boolean

  value?: StringOrNumber

  width?: number

  defaultValue?: StringOrNumber

  options?: RadioOption[]

  name?: string

  renderTrigger?: RenderTrigger

  renderItem?: RenderItem

  onChange?(nextValue: StringOrNumber): void
}
