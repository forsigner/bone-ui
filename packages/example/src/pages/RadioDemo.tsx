import React from 'react'
import { View } from '@styli/react'
import { Radio, RadioGroup } from '@bone-ui/radio'

export default function RadioDemo() {
  return (
    <View p6 space-10 w-800>
      <RadioGroup
        value="green"
        onChange={(e) => {
          console.log('ee----:', e)
        }}
      >
        <Radio value="red">Red</Radio>
        <Radio value="green">Green</Radio>
        <Radio value="blue">Blue</Radio>
      </RadioGroup>

      <Radio value="blue">Blue</Radio>
    </View>
  )
}
