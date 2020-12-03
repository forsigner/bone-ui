import { StyliHTMLProps } from '@styli/types'
import { ReactNode } from 'react'

export type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

type StringOrNumber = string | number

export interface CheckboxProps extends Omit<StyliHTMLProps<'input'>, 'ref'> {
  render?: (status: CheckboxStatus) => ReactNode
}

export interface CheckboxStatus {
  checked?: boolean

  disabled?: boolean

  focused?: boolean

  children?: ReactNode
}

export interface CheckboxHooksResult {
  inputProps: InputProps

  state: {
    checked?: boolean
    disabled?: boolean
  }
}

export interface CheckboxOption {
  label: React.ReactNode
  value: any
  disabled?: boolean
}

export interface CheckboxGroupProps extends Omit<StyliHTMLProps<'div'>, 'onChange'> {
  value?: StringOrNumber

  defaultValue?: StringOrNumber

  onChange?(nextValue: StringOrNumber): void

  options?: CheckboxOption[]

  name?: string
}
