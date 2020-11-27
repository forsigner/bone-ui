import React from 'react'
import { View, Heading } from '@styli/react'
import { Button } from '@bone-ui/Button'
import { AcademicCapOutline } from '@bone-ui/icons'

export default function ButtonDemo() {
  return (
    <View>
      <Heading>Size</Heading>
      <View row spaceX-20>
        <Button text="Button" size="xs" />
        <Button text="Button" size="sm" />
        <Button text="Button" size="md" />
        <Button text="Button" size="lg" />
      </View>

      <Heading>variant</Heading>
      <View row spaceX-20>
        <Button text="Button" variant="outline" />
        <Button text="Button" variant="ghost" />
        <Button text="Button" variant="solid" />
      </View>

      <Heading>colorScheme</Heading>
      <View row spaceX-20>
        <Button text="Button" colorScheme="red50" />
        <Button text="Button" colorScheme="red80" />
        <Button text="Button" colorScheme="red" />
      </View>

      <Heading>with icon</Heading>
      <View row spaceX-20>
        <Button text="Button" leftIcon={<AcademicCapOutline mr1 />} />
        <Button text="Button" rightIcon={<AcademicCapOutline ml1 />} />
        <Button
          text="Button"
          leftIcon={<AcademicCapOutline mr1 />}
          rightIcon={<AcademicCapOutline ml1 />}
        />
      </View>

      <Heading>disable</Heading>
      <View row spaceX-20>
        <Button text="Button" disabled />
      </View>
    </View>
  )
}
