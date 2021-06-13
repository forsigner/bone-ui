import React, { useEffect, useState } from 'react'
import { Box } from '@fower/react'
import { Checkbox, CheckboxGroup, CheckboxProps } from '@bone-ui/checkbox'

const ColorCheckbox = (props: CheckboxProps) => (
  <Checkbox
    {...props}
    render={({ checked }) => (
      <Box toCenter circle-48 bg={checked ? 'gray200' : false}>
        <Box bg={props.value as string} circle-32></Box>
      </Box>
    )}
  />
)

const MyCheckbox = () => {
  const [isChecked, setChecked] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setChecked(false)
    }, 2000)
  }, [])
  return (
    <ColorCheckbox
      value="red200"
      checked={isChecked}
      onChange={(e) => {
        console.log('e:', e.target.checked)
        setChecked(e.target.checked)
      }}
    ></ColorCheckbox>
  )
}

export default function CheckboxDemo() {
  const [value, setValue] = useState(['green'])

  useEffect(() => {
    setTimeout(() => {
      setValue(['red', 'green'])
    }, 3000)
  }, [])

  return (
    <Box p6 space-20 w-800>
      <MyCheckbox></MyCheckbox>
      <CheckboxGroup
        // defaultValue={['green']}
        value={value}
        onChange={(e: any) => {
          console.log('e group:', e)
          setValue(e)
        }}
      >
        <Checkbox
          value="red"
          onChange={(e) => {
            console.log('box e:', e)
          }}
        >
          Red
        </Checkbox>
        <Checkbox value="green">Green</Checkbox>
        <Checkbox value="blue">Blue</Checkbox>
      </CheckboxGroup>
      <Box as="h2">Color Scheme</Box>
      <Box spaceX3>
        <Checkbox colorScheme="orange500" defaultChecked>
          Orange500
        </Checkbox>
        <Checkbox colorScheme="red500" defaultChecked>
          Red500
        </Checkbox>
        <Checkbox colorScheme="blue500" defaultChecked>
          Blue500
        </Checkbox>
      </Box>

      <Checkbox value="foo">Bar</Checkbox>

      <Checkbox value="foo" defaultChecked>
        Bar
      </Checkbox>
      <Checkbox value="foo" disabled>
        Bar
      </Checkbox>
      <Checkbox
        defaultChecked
        onChange={(e) => {
          console.log('-----------xxx:', e.target.checked)
        }}
      ></Checkbox>

      <Checkbox
        render={({ checked }) => (
          <Box border p2 bg={checked ? 'yellow200' : false}>
            Custom checkbox
          </Box>
        )}
      ></Checkbox>
      <Box>
        <h2>Select your colors</h2>
        <CheckboxGroup
          defaultValue={['green300']}
          onChange={(e) => {
            console.log('eeee==========:', e)
          }}
        >
          <ColorCheckbox value="red300"></ColorCheckbox>
          <ColorCheckbox value="green300"></ColorCheckbox>
          <ColorCheckbox value="blue300"></ColorCheckbox>
          <ColorCheckbox value="orange300"></ColorCheckbox>
          <ColorCheckbox value="purple300"></ColorCheckbox>
        </CheckboxGroup>
      </Box>
    </Box>
  )
}
