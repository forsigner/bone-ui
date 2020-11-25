import React from 'react'
import { View } from '@styli/react'
import { Checkbox } from '@bone-ui/checkbox'

export const CheckboxDemo = () => {
  function onChange(value: any) {
    console.log('value:', value)
  }

  function onBlur(value: any) {
    console.log('blure value:', value)
  }
  return (
    <View p6 spaceX-10 w-800>
      <Checkbox onBlur={onBlur} onChange={onChange}>
        Steve Jobx
      </Checkbox>
      <Checkbox disabled>Bill Gates</Checkbox>
      <Checkbox focused>Elon Musk</Checkbox>
    </View>
  )
}
