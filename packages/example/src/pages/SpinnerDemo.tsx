import React from 'react'
import { View } from '@styli/react'
import { Spinner } from '@bone-ui/spinner'
import { SunOutline, CashOutline } from '@bone-ui/icons'

export default function SpinnerDemo() {
  return (
    <View p6 spaceX-10 w-800 center>
      <Spinner></Spinner>
      <Spinner c="gray30"></Spinner>
      <Spinner c="gray30"></Spinner>
      <Spinner c="red40"></Spinner>
      <Spinner c="green40"></Spinner>
      <Spinner c="primary"></Spinner>
      <Spinner c="teal"></Spinner>
      <Spinner c="teal" speed="0.4s"></Spinner>
      <Spinner c="orange40">
        <SunOutline></SunOutline>
      </Spinner>

      <Spinner c="orange40">
        <CashOutline></CashOutline>
      </Spinner>
    </View>
  )
}
