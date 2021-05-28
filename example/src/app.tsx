import React from 'react'
import { Box } from '@styli/react'

import './globals.css'

export function render(oldRender: any) {
  oldRender()
}

export function rootContainer(container: any) {
  return <Box p-100>{container}</Box>
}
