import React from 'react'
import { View } from '@styli/react'
import UserAddSolid from '@bone-ui/icons'
import { CakeOutline } from '@bone-ui/icons'
import CheckCircleSolid from '@bone-ui/icons'
import BookmarkOutline from '@bone-ui/icons'
import BookmarkSolid from '@bone-ui/icons'
import AcademicCapOutline from '@bone-ui/icons'
import AcademicCapSolid from '@bone-ui/icons'
import KeyOutline from '@bone-ui/icons'
import UserOutline from '@bone-ui/icons'
import KeySolid from '@bone-ui/icons'

export default function IconDemo() {
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
