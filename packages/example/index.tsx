import React from 'react'
import ReactDOM from 'react-dom'

import { View } from '@styli/react'
import { AvatarDemo } from './components/AvatarDemo'
import { InputDemo } from './components/InputDemo'
import './index.css'
import { CardDemo } from './components/CardDemo'

const App = () => {
  return (
    <View p-100>
      <CardDemo></CardDemo>
      <br />
      <br />
      <AvatarDemo></AvatarDemo>
      <br />
      <InputDemo></InputDemo>
    </View>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
