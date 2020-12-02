import { useContext, useState, useEffect } from 'react'
import { checkboxGroupContext } from './checkboxGroupContext'
import { InputProps, CheckboxHooksResult } from './types'

export function useCheckbox(props: InputProps): CheckboxHooksResult {
  let inputProps: InputProps = {}
  const { value, onChange } = props

  /** hooks */
  const context = useContext(checkboxGroupContext)
  const [disabled, setDisabled] = useState(props.disabled ?? false)
  const [checked, setChecked] = useState(props.checked || props.defaultChecked || false)

  useEffect(() => {
    if (typeof props.checked !== 'boolean') return
    setChecked(!!props.checked)
  }, [props.checked])

  useEffect(() => {
    if (typeof props.disabled !== 'boolean') return
    setDisabled(!!props.disabled)
  }, [props.disabled])

  /** For checkbox group */
  if (context) {
    const { checkboxGroupValue, setCheckboxGroupValue } = context
    inputProps.checked = checkboxGroupValue.includes(value)
    inputProps.onChange = (e) => {
      const { checked } = e.target
      const newValue = checked
        ? [...checkboxGroupValue, value]
        : checkboxGroupValue.filter((i) => i !== value)

      setCheckboxGroupValue(newValue)
      onChange && onChange(e)
    }
  } else {
    inputProps.onChange = (e) => {
      const { checked } = e.target
      setChecked(checked)
    }
  }

  return {
    inputProps,
    state: { disabled, checked: context ? inputProps.checked : checked },
  }
}
