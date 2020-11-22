import React from 'react'
import { View } from '@styli/react'
import {
  BookmarkOutline,
  BookmarkSolid,
  AcademicCapOutline,
  AcademicCapSolid,
  KeyOutline,
  KeySolid,
} from '@bone-ui/icons'

export const IconDemo = () => {
  return (
    <View p9 w-400>
      <BookmarkOutline red40></BookmarkOutline>
      <BookmarkSolid green40></BookmarkSolid>
      <AcademicCapOutline></AcademicCapOutline>
      <AcademicCapSolid></AcademicCapSolid>
      <KeyOutline></KeyOutline>
      <KeySolid></KeySolid>
    </View>
  )
}
