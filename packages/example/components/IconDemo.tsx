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
} from '@bone-ui/icons'
import UserAddSolid from '@bone-ui/icons/lib/UserAddSolid'
import { CakeOutline } from '@bone-ui/icons/lib/CakeOutline'
import CheckCircleSolid from '@bone-ui/icons/lib/CheckCircleSolid'

export const IconDemo = () => {
  return (
    <View spaceX-10>
      <BookmarkOutline red30></BookmarkOutline>
      <BookmarkSolid red40></BookmarkSolid>
      <BookmarkSolid green40></BookmarkSolid>
      <AcademicCapOutline yellow40></AcademicCapOutline>
      <AcademicCapSolid></AcademicCapSolid>
      <KeyOutline></KeyOutline>
      <KeySolid orange40></KeySolid>
      <UserOutline s-60> </UserOutline>
      <UserAddSolid s-48 teal50></UserAddSolid>
      <CheckCircleSolid teal40></CheckCircleSolid>
      <CakeOutline s-48 red40></CakeOutline>
    </View>
  )
}
