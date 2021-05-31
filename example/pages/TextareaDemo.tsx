import React, { useEffect, useRef, useState } from 'react'
import { Textarea } from '@bone-ui/textarea'
import { Box } from '@fower/react'

export default function TextareaDemo() {
  const ref = useRef<HTMLInputElement>(null)
  const [username, setUsername] = useState('')

  useEffect(() => {
    console.log('ref:', ref.current)
    console.log('ref:', ref.current?.name)
  }, [])

  return (
    <Box p20 spaceY4>
      <Textarea placeholder="some..." defaultValue="gogo" />
      <Textarea variant="filled" placeholder="some..." defaultValue="gogo" />
      <Textarea variant="unstyled" placeholder="some..." defaultValue="gogo" />
    </Box>
  )
}
