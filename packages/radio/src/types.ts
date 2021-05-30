import { FowerColor, FowerHTMLProps } from '@fower/types'
import { ReactNode } from 'react'

type StringOrNumber = string | number

export type RenderItem = (props: RadioRenderItemProps) => ReactNode

export type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export interface RadioProps extends Omit<FowerHTMLProps<'input'>, 'ref'> {
  render?: (props: RadioRenderProps) => ReactNode

  colorScheme?: FowerColor

  /**
   * Render children or not
   */
  shouldRenderChildren?: boolean
}

export interface RadioRenderProps {
  checked?: boolean

  disabled?: boolean

  focused?: boolean

  item?: RadioOption

  children?: ReactNode
}

export interface RadioRenderItemProps extends RadioRenderProps {
  i?: number
  item: RadioOption
  defaultRadio: ReactNode
}

export interface RadioHooksResult {
  inputProps: InputProps

  renderItem?: RenderItem

  state: {
    checked?: boolean
    disabled?: boolean
  }
}

export interface RadioOption {
  label: React.ReactNode
  value: any
  disabled?: boolean
  [key: string]: any
}

export type DefaultRender = (props: RadioRenderProps) => ReactNode

export interface RadioGroupProps extends Omit<FowerHTMLProps<'div'>, 'onChange'> {
  value?: StringOrNumber

  defaultValue?: StringOrNumber

  options?: RadioOption[]

  name?: string

  renderItem?: RenderItem

  onChange?(nextValue: StringOrNumber): void
}
