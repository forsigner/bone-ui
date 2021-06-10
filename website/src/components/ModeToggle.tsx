import React, { FC, useState } from 'react'
import { Box } from '@fower/react'

interface Props {}

export const ModeToggle: FC<Props> = () => {
  const [mode, setMode] = useState('Light')
  function toggleMode() {
    if (mode === 'Dark') {
      setMode('Light')
      document.documentElement.classList.remove('dark')
    } else {
      setMode('Dark')
      document.documentElement.classList.add('dark')
    }
  }
  return (
    <Box
      as="button"
      onClick={toggleMode}
      p3
      cursorPointer
      outlineNone
      roundedFull
      orange200
      bgBlack
      black--dark
      bgOrange200--dark
    >
      Toggle {mode}
    </Box>
  )
}
