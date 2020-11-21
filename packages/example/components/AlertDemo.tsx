import React from 'react'
import { View } from '@styli/react'
import { Alert } from '@bone-ui/alert'

export const AlertDemo = () => {
  return (
    <View p9 w-400 spaceY-10>
      <Alert>A default alert</Alert>

      <Alert type="info">A info alert</Alert>

      <Alert type="warning">An warning alert</Alert>

      <Alert type="success">An success alert</Alert>
      <Alert type="error">An error alert</Alert>

      <Alert variant="outline">A default alert</Alert>

      <Alert type="info" variant="outline">
        A info alert
      </Alert>

      <Alert type="warning" variant="outline">
        An warning alert
      </Alert>

      <Alert type="success" variant="outline">
        An success alert
      </Alert>

      <Alert type="error" variant="outline">
        An error alert
      </Alert>
    </View>
  )
}
