import React from 'react'
import { View } from '@fower/react'
import { Spinner } from '@bone-ui/spinner'
import SunOutline from '@bone-ui/icons/lib/SunOutline'
import CashOutline from '@bone-ui/icons/lib/CashOutline'

export default function SpinnerDemo() {
  return (
    <View p6 spaceX-10 w-800 toCenter>
      <Spinner></Spinner>
      <Spinner color="gray300"></Spinner>
      <Spinner color="gray300"></Spinner>
      <Spinner color="red400"></Spinner>
      <Spinner color="green400"></Spinner>
      <Spinner color="primary"></Spinner>
      <Spinner color="teal"></Spinner>
      <Spinner color="teal" speed="0.4s"></Spinner>
      <Spinner color="orange400">
        <SunOutline></SunOutline>
      </Spinner>

      <Spinner color="orange400">
        <CashOutline></CashOutline>
      </Spinner>

      <Spinner color="teal" speed="0.2s"></Spinner>
    </View>
  )
}
