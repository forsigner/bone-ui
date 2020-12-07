import { ChangeEvent } from 'react'
import { CheckboxGroupValue } from './types'

export function getNextCheckboxGroupValue(
  e: ChangeEvent<HTMLInputElement>,
  currentGroupValue: CheckboxGroupValue,
) {
  const { checked, value: targeValue } = e.target

  return checked
    ? [...currentGroupValue, targeValue]
    : currentGroupValue.filter((i) => i !== targeValue)
}
