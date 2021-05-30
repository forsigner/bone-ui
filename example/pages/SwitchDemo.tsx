import React, { useEffect, useRef, useState } from 'react'
import { View } from '@fower/react'
import { Switch } from '@bone-ui/switch'

export default function SwitchDemo() {
  const [checked, setCheked] = useState(false)
  const ref = useRef<HTMLInputElement>(null)
  useEffect(() => {
    // console.log('ref:', ref.current)
  }, [])
  return (
    <View p6 spaceX-32 w-800 toLeft flexWrap="wrap">
      <Switch defaultChecked />
      <Switch checked={checked} />
      <Switch ref={ref}>Switch</Switch>
      <Switch defaultChecked />
      <Switch disabled />
      <Switch checked disabled />

      <Switch colorScheme="orange400" defaultChecked />
      <Switch colorScheme="purple400" defaultChecked />
      <Switch colorScheme="purple400" offColorScheme="black" />

      <Switch size={16} />
      <Switch size={20} />
      <Switch size={24} />
      <Switch size={32} />
      <Switch size={40} />
      <Switch size={48} />
    </View>
  )
}
