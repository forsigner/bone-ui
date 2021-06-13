import React, { useEffect, useRef, useState } from 'react'
import { Input, InputGroup, InputAddon, InputElement } from '@bone-ui/input'
import { Box } from '@fower/react'
import { SearchOutline } from '@bone-ui/icons/lib/SearchOutline'
import { MailSolid } from '@bone-ui/icons/lib/MailSolid'
import { CheckSolid } from '@bone-ui/icons/lib/CheckSolid'

export default function InputDemo() {
  const ref = useRef<HTMLInputElement>(null)
  const [username, setUsername] = useState('')

  useEffect(() => {
    // console.log('ref:', ref.current)
    // console.log('ref:', ref.current?.name)
  }, [])

  return (
    <Box p20 spaceY4>
      <Box spaceY3>
        <Input variant="outline" placeholder="outline" />
        <Input variant="outline" placeholder="outline" />
        <Input variant="filled" placeholder="filled" />
        <Input variant="unstyled" placeholder="unstyled" />
      </Box>

      <Box spaceY3>
        <Input placeholder="red400" colorScheme="red400" />
        <Input placeholder="blue400" colorScheme="blue400" />
        <Input placeholder="purple400" colorScheme="purple400" />
      </Box>

      <Box spaceY3>
        <Input size="sm" placeholder="small" />
        <Input size="md" placeholder="medium" />
        <Input size="lg" placeholder="large" />
      </Box>

      <Box spaceY3 w-200>
        <Input size={20} placeholder="size 20" />
        <Input size={30} placeholder="size 30" />
        <Input size={50} placeholder="size 40" />
      </Box>

      <Box spaceY3>
        <Input placeholder="rounded full" roundedFull />
        <Input placeholder="rounded full with filled" variant="filled" roundedFull />
        <Input placeholder="rounded large" roundedLG />
        <Input placeholder="rounded none" roundedNone />
      </Box>

      <Box spaceY3>
        <Input variant="outline" placeholder="outline" shadowNone--focus />
        <Input variant="filled" placeholder="filled" />
      </Box>

      <Box spaceY3>
        <Input disabled variant="outline" placeholder="outline disabled" />
        <Input disabled variant="filled" placeholder="filled disabled" />
      </Box>

      <Box spaceY3>
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
      </Box>

      <Box spaceY3>
        <InputGroup>
          <InputElement>
            <MailSolid gray500 />
          </InputElement>
          <Input placeholder="unstyled disabled" />
        </InputGroup>

        <InputGroup>
          <Input placeholder="unstyled disabled" />

          <InputElement>
            <CheckSolid green500 />
          </InputElement>
        </InputGroup>
      </Box>
    </Box>
  )
}
