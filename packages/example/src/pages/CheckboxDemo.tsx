import React from 'react'
import { View } from '@styli/react'
import { Checkbox, CheckboxGroup } from '@bone-ui/checkbox'

export default function CheckboxDemo() {
  function onChange(value: any) {
    console.log('value:', value)
  }

  return (
    <View p6 spaceX-10 w-800>
      <CheckboxGroup value={['green']}>
        <Checkbox onChange={onChange} value="red">
          Red
        </Checkbox>
        <Checkbox value="green">Green</Checkbox>
        <Checkbox value="blue">Blue</Checkbox>
      </CheckboxGroup>
      <Checkbox value="foo">Bar</Checkbox>
    </View>
  )
}
