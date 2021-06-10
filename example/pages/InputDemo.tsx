import React, { useEffect, useRef, useState } from 'react'
import { Input, InputGroup, InputAddon, InputElement } from '@bone-ui/input'
import { Box } from '@fower/react'

export default function InputDemo() {
  const ref = useRef<HTMLInputElement>(null)
  const [username, setUsername] = useState('')

  useEffect(() => {
    // console.log('ref:', ref.current)
    // console.log('ref:', ref.current?.name)
  }, [])

  return (
    <Box p20 spaceY4>
      <Input
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        name="username"
        ref={ref}
        placeholder="user name"
      />
      <Input rounded-40 placeholder="md input" size="md" colorScheme="red500" />
      <Input size="lg" colorScheme="green500" />
      <Input variant="outline" placeholder="outline" />
      <Input variant="filled" placeholder="filled" />
      <Input variant="unstyled" placeholder="unstyled" />
      <Input disabled variant="outline" placeholder="outline disabled" />
      <Input disabled variant="filled" placeholder="filled disabled" />

      <InputGroup>
        <InputAddon>$</InputAddon>
        <Input size="lg" placeholder="unstyled disabled" />
      </InputGroup>

      <InputGroup>
        <Input size="lg" placeholder="unstyled disabled" />
        <InputAddon>$</InputAddon>
      </InputGroup>

      <InputGroup>
        <InputAddon>$</InputAddon>
        <Input size="lg" placeholder="unstyled disabled" />
        <InputAddon>$</InputAddon>
      </InputGroup>

      <InputGroup>
        <InputElement>$</InputElement>
        <Input size="lg" placeholder="unstyled disabled" />
      </InputGroup>

      <InputGroup>
        <Input size="lg" placeholder="unstyled disabled" />
        <InputElement>$</InputElement>
      </InputGroup>

      <InputGroup>
        <InputElement>$</InputElement>
        <Input size="lg" placeholder="unstyled disabled" />
        <InputElement>$</InputElement>
      </InputGroup>

      <InputGroup>
        <InputAddon>$</InputAddon>
        <Input size="lg" placeholder="unstyled disabled" />
        <InputElement>$</InputElement>
      </InputGroup>

      <InputGroup>
        <InputElement>$</InputElement>
        <Input size="lg" placeholder="unstyled disabled" />
        <InputAddon>$</InputAddon>
      </InputGroup>
    </Box>
  )
}
