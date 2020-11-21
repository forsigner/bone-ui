import React from 'react'
import ReactDOM from 'react-dom'

import { View } from '@styli/react'
import { AvatarDemo } from './components/AvatarDemo'
import { InputDemo } from './components/InputDemo'
import './index.css'
import { CardDemo } from './components/CardDemo'
import { AlertDemo } from './components/AlertDemo'

const App = () => {
  return (
    <View p-100 spaceY-10>
      <AlertDemo></AlertDemo>
      <CardDemo></CardDemo>
      <AvatarDemo></AvatarDemo>
      <InputDemo></InputDemo>
    </View>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
