import React from 'react'
import { Box } from '@fower/react'
import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@bone-ui/alert'
import { CloseButton } from '@bone-ui/close-button'

export default function AlertDemo() {
  return (
    <Box w-800 spaceY-10 p10>
      <Box as="h2">Default</Box>
      <Alert>A default alert</Alert>

      <Box as="h2">More types</Box>

      <Box spaceY3>
        <Alert type="info">A info alert</Alert>
        <Alert type="warning">An warning alert</Alert>
        <Alert type="success">An success alert</Alert>
        <Alert type="error">An error alert</Alert>
      </Box>

      <Box as="h2">With Close Button</Box>

      <Box spaceY3>
        <Alert type="info">
          A info alert <CloseButton size={20} absolute top-6 right-6 />
        </Alert>

        <Alert type="warning">
          An warning alert <CloseButton absolute top-6 right-6 />
        </Alert>
      </Box>

      <Box as="h2">With Icon</Box>

      <Box spaceY3>
        <Alert>
          <AlertIcon /> A default alert
        </Alert>

        <Alert type="warning">
          <AlertIcon></AlertIcon> A default alert
        </Alert>

        <Alert type="error">
          <AlertIcon />A default alert
        </Alert>
      </Box>

      <Box as="h2">Title and Description</Box>

      <Box spaceY3>
        <Alert type="info">
          <AlertIcon />
          <Box>
            <AlertTitle>Info</AlertTitle>
            <AlertDescription>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus
              eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum
              quis sed voluptatum quae eum fugit earum.
            </AlertDescription>
          </Box>
        </Alert>

        <Alert type="success" column toCenterX textCenter>
          <AlertIcon square-48 />
          <AlertTitle textLG>Success</AlertTitle>
          <AlertDescription>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus
            eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum
            quis sed voluptatum quae eum fugit earum.
          </AlertDescription>
        </Alert>
      </Box>

      <Box as="h2">Outline</Box>

      <Box spaceY3>
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
      </Box>
    </Box>
  )
}
