import React from 'react'
import { View, Image } from '@fower/react'
import { Card } from '@bone-ui/card'

export default function CardDemo() {
  return (
    <View w-400 p10>
      <Card variant="outline">A basic card.</Card>
      <br />
      <br />
      <Card variant="shadow">
        <h4>The Bone UI</h4>
        <p>A shadow card.</p>
      </Card>
      <br />
      <br />
      <Card p0 variant="outline" hoverable>
        <Image w-100p src="https://avatars2.githubusercontent.com/u/2668081"></Image>
        <View p4>
          <View text-20 fontBold>
            The Bone UI
          </View>
          <p>A shadow card.</p>
        </View>
      </Card>
      <br />
      <br />
      <Card variant="shadow" hoverable>
        A basic card. hoverable
      </Card>
      <br />
      <br />

      <Card variant="unstyled" hoverable>
        A basic card.
      </Card>
      <br />
      <br />

      <Card bgTeal200 variant="unstyled" hoverable>
        unstyled
      </Card>
      <br />
      <br />
    </View>
  )
}
