import React from 'react'
import { View } from '@styli/react'
import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@bone-ui/alert'

export const AlertDemo = () => {
  return (
    <View w-800 spaceY-10>
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

      <Alert>
        <AlertIcon /> A default alert
      </Alert>

      <Alert type="error">
        <AlertIcon />A default alert
      </Alert>

      <Alert type="info">
        <AlertIcon />
        <View>
          <AlertTitle>Info</AlertTitle>
          <AlertDescription>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus
            eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum
            quis sed voluptatum quae eum fugit earum.
          </AlertDescription>
        </View>
      </Alert>

      <Alert type="success" column centerX textCenter>
        <AlertIcon s-48 />
        <AlertTitle f4>Success</AlertTitle>
        <AlertDescription>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus
          eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum
          quis sed voluptatum quae eum fugit earum.
        </AlertDescription>
      </Alert>

      <Alert type="warning">
        <AlertIcon></AlertIcon> A default alert
      </Alert>
    </View>
  )
}
