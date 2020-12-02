import { StyliHTMLProps } from '@styli/types'
import { ReactNode, ReactElement } from 'react'

export type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export interface CheckboxProps extends Omit<StyliHTMLProps<'input'>, 'ref'> {
  render?: (status: CheckboxStatus) => ReactElement
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
