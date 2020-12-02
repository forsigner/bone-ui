import { useContext, useState, useEffect } from 'react'
import { radioGroupContext } from './radioGroupContext'
import { InputProps, RadioHooksResult } from './types'

export function useRadio(props: InputProps): RadioHooksResult {
  let inputProps: InputProps = {}
  const { value, onChange } = props

  /** hooks */
  const context = useContext(radioGroupContext)
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

  /** For radio group */
  if (context) {
    const { radioGroupValue, setRadioGroupValue } = context
    inputProps.checked = value === radioGroupValue
    inputProps.onChange = (e) => {
      setRadioGroupValue(value)
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
