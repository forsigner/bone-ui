import React from 'react'
import { View } from '@fower/react'
import { Spinner } from '@bone-ui/spinner'
import SunOutline from '@bone-ui/icons/lib/SunOutline'
import CashOutline from '@bone-ui/icons/lib/CashOutline'

export default function SpinnerDemo() {
  return (
    <View p6 spaceX-10 w-800 toCenter>
      <Spinner />
      <Spinner gray400 />
      <Spinner red400 />
      <Spinner green500 />
      <Spinner orange500>
        <SunOutline></SunOutline>
      </Spinner>

      <Spinner teal600>
        <CashOutline></CashOutline>
      </Spinner>

      <Spinner cyan500 speed="0.2s"></Spinner>
    </View>
  )
}
