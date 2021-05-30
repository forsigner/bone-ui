import React from 'react'
import { View } from '@fower/react'
import UserAddSolid from '@bone-ui/icons/lib/UserAddSolid'
import { CakeOutline } from '@bone-ui/icons/lib/CakeOutline'
import CheckCircleSolid from '@bone-ui/icons/lib/CheckCircleSolid'
import BookmarkOutline from '@bone-ui/icons/lib/BookmarkOutline'
import BookmarkSolid from '@bone-ui/icons/lib/BookmarkSolid'
import AcademicCapOutline from '@bone-ui/icons/lib/AcademicCapOutline'
import AcademicCapSolid from '@bone-ui/icons/lib/AcademicCapSolid'
import KeyOutline from '@bone-ui/icons/lib/KeyOutline'
import UserOutline from '@bone-ui/icons/lib/UserOutline'
import { KeySolid } from '@bone-ui/icons'

export default function IconDemo() {
  return (
    <View spaceX-10>
      <BookmarkOutline red300></BookmarkOutline>
      <BookmarkSolid red400></BookmarkSolid>
      <BookmarkSolid green400></BookmarkSolid>
      <AcademicCapOutline yellow400></AcademicCapOutline>
      <AcademicCapSolid></AcademicCapSolid>
      <KeyOutline></KeyOutline>
      <KeySolid orange400 size={100}></KeySolid>
      <UserOutline square-60> </UserOutline>
      <UserAddSolid square-48 teal50></UserAddSolid>
      <CheckCircleSolid teal400></CheckCircleSolid>
      <CakeOutline square-48 red400></CakeOutline>
    </View>
  )
}
