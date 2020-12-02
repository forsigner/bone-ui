import React, { useState } from 'react'
import { View } from '@styli/react'
import { Switch } from '@bone-ui/switch'

export default function SwitchDemo() {
  const [checked, setCheked] = useState(false)
  return (
    <View p6 spaceX-10 w-800 left>
      <Switch checked={checked} onChange={(e) => setCheked(e.target.checked)} />
      <Switch />
      <Switch defaultChecked />
      <Switch disabled />
      <Switch checked disabled />
    </View>
  )
}
