import React, { useEffect, useRef, useState } from 'react'
import { View } from '@styli/react'
import { Switch } from '@bone-ui/switch'

export default function SwitchDemo() {
  const [checked, setCheked] = useState(false)
  const ref = useRef<HTMLInputElement>(null)
  useEffect(() => {
    console.log('ref:', ref.current)
  }, [])
  return (
    <View p6 spaceX-32 w-800 left reset>
      <Switch checked={checked} onChange={(e) => setCheked(e.target.checked)} />
      <Switch ref={ref}>Switch</Switch>
      <Switch defaultChecked />
      <Switch disabled />
      <Switch checked disabled />

      <Switch colorScheme="orange40" defaultChecked />
      <Switch colorScheme="purple40" defaultChecked />
      <Switch colorScheme="purple40" offColorScheme="black" />

      <Switch size={16} />
      <Switch size={20} />
      <Switch size={24} />
      <Switch size={32} />
      <Switch size={40} />
      <Switch size={48} />
    </View>
  )
}
