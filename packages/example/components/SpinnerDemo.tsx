import React from 'react'
import { View } from '@styli/react'
import { Spinner } from '@bone-ui/spinner'
import { SunOutline, CashOutline } from '@bone-ui/icons'

export const SpinnerDemo = () => {
  return (
    <View p6 spaceX-10 w-800 center>
      <Spinner></Spinner>
      <Spinner colorScheme="gray30"></Spinner>
      <Spinner colorScheme="red40"></Spinner>
      <Spinner colorScheme="green40"></Spinner>
      <Spinner colorScheme="primary"></Spinner>
      <Spinner colorScheme="teal"></Spinner>
      <Spinner colorScheme="teal" speed="0.4s"></Spinner>
      <Spinner colorScheme="orange40">
        <SunOutline></SunOutline>
      </Spinner>

      <Spinner colorScheme="orange40">
        <CashOutline></CashOutline>
      </Spinner>
    </View>
  )
}
