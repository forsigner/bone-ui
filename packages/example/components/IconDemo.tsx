import React from 'react'
import { View } from '@styli/react'
import {
  BookmarkOutline,
  BookmarkSolid,
  AcademicCapOutline,
  AcademicCapSolid,
  KeyOutline,
  KeySolid,
  UserOutline,
  // UserAddSolid,
  // CakeOutline,
} from '@bone-ui/icons'
import UserAddSolid from '@bone-ui/icons/lib/UserAddSolid'
import { CakeOutline } from '@bone-ui/icons/lib/CakeOutline'

export const IconDemo = () => {
  return (
    <View p9 w-400>
      <BookmarkOutline red40></BookmarkOutline>
      <BookmarkSolid green40></BookmarkSolid>
      <AcademicCapOutline></AcademicCapOutline>
      <AcademicCapSolid></AcademicCapSolid>
      <KeyOutline></KeyOutline>
      <KeySolid orange40></KeySolid>
      <UserOutline s-60> </UserOutline>
      <UserAddSolid s-48 teal50></UserAddSolid>
      <CakeOutline s-48 red40></CakeOutline>
    </View>
  )
}
