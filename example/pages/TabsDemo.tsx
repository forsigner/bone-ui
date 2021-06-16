import React, { useState } from 'react'
import { Tabs, Tab } from '@bone-ui/tabs'
import { Button } from '@bone-ui/button'
import { MailOutline } from '@bone-ui/icons/lib/MailOutline'
import { Box } from '@fower/react'
import UserOutline from '@bone-ui/icons/lib/UserOutline'

export default function TabsDemo() {
  const [color, setColor] = useState<any>('green')
  console.log('color:', color)
  const [value, setValue] = useState('3')

  return (
    <Box p10>
      <h1>Simple</h1>
      <Tabs defaultValue="2">
        <Tab label="Red" value="1">
          <Box red500>Red</Box>
        </Tab>
        <Tab label="Green" value="2">
          <Box green500>Green</Box>
        </Tab>
        <Tab label="blue" value="3">
          <Box blue500>Blue</Box>
        </Tab>
      </Tabs>

      <h1>Value</h1>

      <Button onClick={() => setColor('red')}>To red</Button>

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
      <Tabs>
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

      <h1>With Icon</h1>
      <Tabs defaultValue="2">
        <Tab
          value="1"
          label={
            <Box toCenterY>
              <MailOutline stroke-1 size={20} /> <Box>Mail</Box>
            </Box>
          }
        >
          Mail
        </Tab>
        <Tab
          value="2"
          label={
            <Box toCenterY>
              <UserOutline stroke-1 size={20} /> <Box>User</Box>
            </Box>
          }
        >
          <Box green500>User</Box>
        </Tab>
      </Tabs>

      <h1>Custom label render</h1>
      <Tabs
        defaultValue="green"
        hideDivider
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
        <Tab value="purple" label="Purple">
          <Box purple500>Purple</Box>
        </Tab>
      </Tabs>
    </Box>
  )
}
