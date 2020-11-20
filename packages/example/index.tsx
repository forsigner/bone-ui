import React from 'react'
import ReactDOM from 'react-dom'

import { View } from '@styli/react'
import { AvatarDemo } from './components/AvatarDemo'
import { InputDemo } from './components/InputDemo'
import './index.css'

const App = () => {
  return (
    <View p-100>
      <AvatarDemo></AvatarDemo>
      <br />
      <InputDemo></InputDemo>
    </View>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
