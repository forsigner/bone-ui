import React, { useEffect, useRef, useState } from 'react'
import { Input } from '@bone-ui/input'
import { Box } from '@fower/react'

export default function InputDemo() {
  const ref = useRef<HTMLInputElement>(null)
  const [username, setUsername] = useState('')

  useEffect(() => {
    console.log('ref:', ref.current)
    console.log('ref:', ref.current?.name)
  }, [])

  return (
    <Box p20>
      <Input
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        name="username"
        ref={ref}
        placeholder="user name"
        size="small"
      />
      <br />
      <br />
      <Input rounded-40 placeholder="medium input" size="medium" colorScheme="red500"></Input>

      <br />
      <br />
      <Input size="large" colorScheme="green500"></Input>

      <br />
      <br />
      <Input variant="outline" placeholder="outline"></Input>

      <br />
      <br />
      <Input variant="filled" placeholder="filled"></Input>

      <br />
      <br />
      <Input variant="unstyled" placeholder="unstyled"></Input>

      <br />
      <br />
      <Input disabled variant="outline" placeholder="outline disabled"></Input>

      <br />
      <br />
      <Input disabled variant="filled" placeholder="filled disabled"></Input>

      <br />
      <br />
      <Input disabled variant="unstyled" placeholder="unstyled disabled"></Input>
    </Box>
  )
}
