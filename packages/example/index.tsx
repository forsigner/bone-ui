import React from 'react'
import ReactDOM from 'react-dom'
import { AvatarDemo } from './components/AvatarDemo'

const App = () => {
  return (
    <div>
      <AvatarDemo></AvatarDemo>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
