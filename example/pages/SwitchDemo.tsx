import React, { useEffect, useRef, useState } from 'react'
import { Box } from '@fower/react'
import { Switch } from '@bone-ui/switch'

export default function SwitchDemo() {
  const [checked, setCheked] = useState(false)
  const ref = useRef<HTMLInputElement>(null)
  useEffect(() => {
    // console.log('ref:', ref.current)
  }, [])
  return (
    <Box p6 spaceY3 w-800 column>
      <Switch defaultChecked />
      <Switch checked={checked} />
      <Switch ref={ref}>Switch</Switch>
      <Switch defaultChecked />
      <Switch disabled />
      <Switch checked disabled onChange={(e) => setCheked(e.target.checked)} />

      <Switch colorScheme="orange400" defaultChecked />
      <Switch colorScheme="purple400" defaultChecked />
      <Switch colorScheme="purple400" offColorScheme="black" />

      <Box toCenterY spaceX3>
        <Switch size="sm" />
        <Switch size="md" />
        <Switch size="lg" />
        <Switch size="sm" defaultChecked />
        <Switch size="md" defaultChecked />
        <Switch size="lg" defaultChecked />
      </Box>

      <Box toCenterY spaceX3>
        <Switch size={16} />
        <Switch size={20} />
        <Switch size={24} />
        <Switch size={32} />
        <Switch size={40} />
        <Switch size={48} />
      </Box>

      <Box spaceX3 toCenterY>
        <Switch size="sm" aspectRatio={1.5} />
        <Switch size="md" defaultChecked aspectRatio={2} />
        <Switch size="lg" aspectRatio={2.5} />
      </Box>
    </Box>
  )
}
