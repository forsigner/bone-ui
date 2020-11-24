import React from 'react'
import { View } from '@styli/react'
import { CloseButton } from '@bone-ui/close-button'

export const CloseButtonDemo = () => {
  return (
    <View left spaceX-10 w-800>
      <CloseButton size={24}></CloseButton>
      <CloseButton size={32}></CloseButton>
      <CloseButton size={40}></CloseButton>
    </View>
  )
}
