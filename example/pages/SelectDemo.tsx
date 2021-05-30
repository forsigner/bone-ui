import React, { useState } from 'react'
import { Select } from '@bone-ui/select'

export default function SelectDemo() {
  const [value, setValue] = useState('green')
  return (
    <div>
      <Select
        value={value}
        onChange={(value: string) => {
          console.log('value-----:', value)
          setValue(value)
        }}
        options={[
          {
            label: '红色',
            value: 'red',
          },
          {
            label: '黄色',
            value: 'yellow',
          },
          {
            label: '绿色',
            value: 'green',
            // disabled: true,
          },
        ]}
      ></Select>
    </div>
  )
}
