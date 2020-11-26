import React from 'react'
import ReactDOM from 'react-dom'
import { Box } from '@styli/react'

import './index.css'
import { AvatarDemo } from './components/AvatarDemo'
import { InputDemo } from './components/InputDemo'
import { CardDemo } from './components/CardDemo'
import { AlertDemo } from './components/AlertDemo'
import { IconDemo } from './components/IconDemo'
import { CloseButtonDemo } from './components/CloseButtonDemo'
import { SpinnerDemo } from './components/SpinnerDemo'
import { RadioDemo } from './components/RadioDemo'
import { CheckboxDemo } from './components/CheckboxDemo'
import { DotDemo } from './components/DotDemo'
import { BadgeDemo } from './components/BadgeDemo'

const App = () => {
  return (
    <Box p-100 spaceY-20>
      <BadgeDemo></BadgeDemo>
      <DotDemo></DotDemo>
      <CheckboxDemo></CheckboxDemo>
      <RadioDemo></RadioDemo>
      <SpinnerDemo></SpinnerDemo>
      <CloseButtonDemo></CloseButtonDemo>
      <IconDemo></IconDemo>
      <AlertDemo></AlertDemo>
      <CardDemo></CardDemo>
      <AvatarDemo></AvatarDemo>
      <InputDemo></InputDemo>
    </Box>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
