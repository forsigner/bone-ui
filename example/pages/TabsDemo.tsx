import React, { useState } from 'react'
import { Tabs, Tab } from '@bone-ui/tabs'
import { Button } from '@bone-ui/button'
import { Box } from '@fower/react'

export default function TabsDemo() {
  const [color, setColor] = useState<any>('green')

  return (
    <Box>
      <h1>Simple</h1>
      <Tabs>
        <Tab label="Red">
          <Box red500>Red</Box>
        </Tab>
        <Tab label="Green">
          <Box green500>
            <Box green500>Green</Box>
            <Box green500>Green</Box>
          </Box>
        </Tab>
        <Tab label="blue">
          <Box blue500>Blue</Box>
        </Tab>
      </Tabs>

      <h1>Value</h1>

      <Button onChange={() => setColor('red')}>To red</Button>

      <Tabs value={color} onChange={(value) => setColor(value)}>
        <Tab value="red" label="Red">
          <Box red500>Red</Box>
        </Tab>
        <Tab value="green" label="Green">
          <Box green500>Green</Box>
        </Tab>
        <Tab value="blue" label="Blue">
          <Box blue500>Blue</Box>
        </Tab>
      </Tabs>

      <h1>Disabled</h1>
      <Tabs value="blue">
        <Tab value="red" label="Red">
          <Box red500>Red</Box>
        </Tab>
        <Tab value="green" label="Green" disabled>
          <Box green500>Green</Box>
        </Tab>
        <Tab value="blue" label="Blue">
          <Box blue500>Blue</Box>
        </Tab>
      </Tabs>

      <h1>Custom label render</h1>
      <Tabs
        hideDivider
        value="green"
        onChange={(value) => {}}
        renderItem={({ checked, item }) => (
          <Box rounded-9999 px-20 py-8 bg={checked ? 'red200' : 'gray200'}>
            {item.label}
          </Box>
        )}
      >
        <Tab value="red" label="Red">
          <Box red500>Red</Box>
        </Tab>
        <Tab value="green" label="Green">
          <Box green500>Green</Box>
        </Tab>
        <Tab value="blue" label="Blue" disabled>
          <Box blue500>Blue</Box>
        </Tab>
      </Tabs>
    </Box>
  )
}
