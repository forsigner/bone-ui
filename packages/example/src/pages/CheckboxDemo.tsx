import React from 'react'
import { Box } from '@styli/react'
import { Checkbox, CheckboxGroup, CheckboxProps } from '@bone-ui/checkbox'

const ColorCheckbox = (props: CheckboxProps) => (
  <Checkbox
    {...props}
    render={({ checked }) => (
      <Box center circle-48 bg={checked ? 'gray20' : false}>
        <Box bg={props.value as string} circle-32></Box>
      </Box>
    )}
  ></Checkbox>
)

export default function CheckboxDemo() {
  return (
    <Box p6 space-20 w-800>
      <CheckboxGroup value={['green']}>
        <Checkbox value="red">Red</Checkbox>
        <Checkbox value="green">Green</Checkbox>
        <Checkbox value="blue">Blue</Checkbox>
      </CheckboxGroup>
      <Checkbox value="foo">Bar</Checkbox>
      <Checkbox value="foo" defaultChecked>
        Bar
      </Checkbox>
      <Checkbox value="foo" disabled>
        Bar
      </Checkbox>
      <Checkbox
        render={({ checked }) => (
          <Box border p2 bg={checked ? 'yellow20' : false}>
            Custom checkbox
          </Box>
        )}
      ></Checkbox>
      <ColorCheckbox value="red20"></ColorCheckbox>

      <Box>
        <h2>Select your colors</h2>
        <CheckboxGroup value={['green']}>
          <ColorCheckbox value="red30"></ColorCheckbox>
          <ColorCheckbox value="green30"></ColorCheckbox>
          <ColorCheckbox value="blue30"></ColorCheckbox>
          <ColorCheckbox value="orange30"></ColorCheckbox>
          <ColorCheckbox value="purple30"></ColorCheckbox>
        </CheckboxGroup>
      </Box>
    </Box>
  )
}
