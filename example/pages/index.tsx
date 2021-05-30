import React from 'react'
import Link from 'next/link'
import { Box } from '@fower/react'

export default function Home() {
  return (
    <Box toCenter spaceX-20 px-100 pt-20 flexWrap="wrap">
      <Link href="/">Home</Link>
      <Link href="/AlertDemo">AlertDemo</Link>
      <Link href="/AvatarDemo">AvatarDemo</Link>
      <Link href="/BadgeDemo">BadgeDemo</Link>
      <Link href="/TagDemo">TagDemo</Link>
      <Link href="/TabsDemo">TabsDemo</Link>
      <Link href="/ButtonDemo">ButtonDemo</Link>
      <Link href="/ButtonGroupDemo">ButtonGroupDemo</Link>
      <Link href="/CardDemo">CardDemo</Link>
      <Link href="/SwitchDemo">SwitchDemo</Link>
      <Link href="/CheckboxDemo">CheckboxDemo</Link>
      <Link href="/CloseButtonDemo">CloseButtonDemo</Link>
      <Link href="/DotDemo">DotDemo</Link>
      <Link href="/IconDemo">IconDemo</Link>
      <Link href="/InputDemo">InputDemo</Link>
      <Link href="/RadioDemo">RadioDemo</Link>
      <Link href="/SpinnerDemo">SpinnerDemo</Link>
      <Link href="/ModalDemo">ModalDemo</Link>
      <Link href="/DrawerDemo">DrawerDemo</Link>
      <Link href="/TooltipDemo">TooltipDemo</Link>
      <Link href="/EntityFormDemo">EntityFormDemo</Link>
    </Box>
  )
}
