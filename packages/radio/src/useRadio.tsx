import { useContext, useState, useEffect } from 'react'
import { radioGroupContext } from './radioGroupContext'
import { InputProps, RadioHooksResult, RenderItem } from './types'

export function useRadio(props: InputProps): RadioHooksResult {
  let inputProps: InputProps = {}
  let renderItem: RenderItem | undefined = undefined
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
    console.log('radioGroupValue:', radioGroupValue)
    inputProps.checked = value === radioGroupValue
    inputProps.onChange = (e) => {
      setRadioGroupValue(value)
      onChange && onChange(e)
    }

    renderItem = context.renderItem
  } else {
    inputProps.onChange = (e) => {
      const { checked } = e.target
      setChecked(checked)
    }
  }

  return {
    inputProps,
    renderItem,
    state: { disabled, checked: context ? inputProps.checked : checked },
  }
}
