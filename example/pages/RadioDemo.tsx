import React, { useEffect, useState } from 'react'
import { View, Box } from '@fower/react'
import { Radio, RadioGroup, RadioProps } from '@bone-ui/radio'

const ColorRadio = (props: RadioProps) => (
  <Radio
    {...props}
    render={({ checked }) => (
      <Box toCenter square-48 rounded-8 bg={checked ? 'gray200' : false}>
        <Box bg={props.value as string} circle-32></Box>
      </Box>
    )}
  ></Radio>
)

export default function RadioDemo() {
  const options = [
    { label: 'A', value: 'A' },
    { label: 'B', value: 'B', disabled: true },
    { label: 'C', value: 'C' },
  ]

  const optionsCustomRender = [
    // { label: 'Free', value: 'free', desc: 'This is Free version' },
    { label: 'Member', value: 'member', desc: 'This is Member version' },
    { label: 'Pro', value: 'pro', desc: 'This is Pro version' },
  ]

  const [color, setColor] = useState('blue')
  const [type, setType] = useState('member')

  useEffect(() => {
    setTimeout(() => {
      setColor('red')
    }, 2000)
  }, [])

  return (
    <View p6 space-10 w-800>
      <h2>Single radio</h2>
      <Radio value="blue">Blue</Radio>

      <h2>RadioGroup</h2>
      <RadioGroup
        value={color}
        onChange={(e) => {
          console.log('object:', e)
        }}
      >
        <Radio value="red" name="color" id="color_1">
          Red
        </Radio>
        <Radio value="green" name="color" id="color_2">
          Green
        </Radio>
        <Radio value="blue" name="color">
          Blue
        </Radio>
      </RadioGroup>

      <Box>
        <h2>Use options</h2>
        <RadioGroup options={options}></RadioGroup>
      </Box>

      <Box>
        <h2>Custom RadioGroup render</h2>
        <RadioGroup
          options={optionsCustomRender}
          value={type}
          column
          spaceY-8
          flex
          onChange={(e: any) => {
            setType(e)
          }}
          renderItem={({ item, defaultRadio, checked }) => (
            <Box p4 toLeft border borderColor={checked ? 'gray600' : 'gray400'} rounded-8 w-400>
              {defaultRadio}
              <Box ml-16>
                <Box>{item.label}</Box>
                <Box gray400>{item.desc}</Box>
              </Box>
            </Box>
          )}
        />
      </Box>

      <Box>
        <h2>Custom Radio render</h2>
        <RadioGroup value="green300">
          <ColorRadio value="red300"></ColorRadio>
          <ColorRadio value="green300"></ColorRadio>
          <ColorRadio value="blue300"></ColorRadio>
          <ColorRadio value="orange300"></ColorRadio>
          <ColorRadio value="purple300"></ColorRadio>
        </RadioGroup>
      </Box>
    </View>
  )
}
