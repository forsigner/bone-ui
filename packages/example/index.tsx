import React from 'react'
import ReactDOM from 'react-dom'
import { View } from '@styli/react'

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

const App = () => {
  return (
    <View p-100 spaceY-10>
      <CheckboxDemo></CheckboxDemo>
      <RadioDemo></RadioDemo>
      <SpinnerDemo></SpinnerDemo>
      <CloseButtonDemo></CloseButtonDemo>
      <IconDemo></IconDemo>
      <AlertDemo></AlertDemo>
      <CardDemo></CardDemo>
      <AvatarDemo></AvatarDemo>
      <InputDemo></InputDemo>
    </View>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
