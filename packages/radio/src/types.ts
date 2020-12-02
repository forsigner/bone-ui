import { StyliHTMLProps } from '@styli/types'
import { ReactNode, ReactElement } from 'react'

export type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export interface RadioProps extends Omit<StyliHTMLProps<'input'>, 'ref'> {
  render?: (status: RadioStatus) => ReactElement
}

export interface RadioStatus {
  checked?: boolean

  disabled?: boolean

  focused?: boolean

  children?: ReactNode
}

export interface RadioHooksResult {
  inputProps: InputProps

  state: {
    checked?: boolean
    disabled?: boolean
  }
}
