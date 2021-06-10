import React from 'react'
import { Box } from '@fower/react'
import { Spinner } from '@bone-ui/spinner'
import SunOutline from '@bone-ui/icons/lib/SunOutline'

export function ItemSpinner(props: any) {
  return (
    <Box toEvenly toCenterY {...props}>
      <Spinner gray400 />
      <Spinner square8 />
      <Spinner red400 square10 speed="0.4s" />

      <Spinner orange500 square12>
        <SunOutline></SunOutline>
      </Spinner>
    </Box>
  )
}
