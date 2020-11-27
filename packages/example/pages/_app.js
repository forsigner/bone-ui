import React from 'react'
import Link from 'next/link'
import { Box } from '@styli/react'

export default function App({ Component, pageProps }) {
  return (
    <Box>
      <Box center spaceX-20 wrap px-100 pt-20>
        <Link href="/">Home</Link>
        <Link href="/AlertDemo">AlertDemo</Link>
        <Link href="/AvatarDemo">AvatarDemo</Link>
        <Link href="/BadgeDemo">BadgeDemo</Link>
        <Link href="/ButtonDemo">ButtonDemo</Link>
        <Link href="/CardDemo">CardDemo</Link>
        <Link href="/CheckboxDemo">CheckboxDemo</Link>
        <Link href="/CloseButtonDemo">CloseButtonDemo</Link>
        <Link href="/DotDemo">DotDemo</Link>
        <Link href="/IconDemo">IconDemo</Link>
        <Link href="/InputDemo">InputDemo</Link>
        <Link href="/RadioDemo">RadioDemo</Link>
        <Link href="/SpinnerDemo">SpinnerDemo</Link>
      </Box>
      <Box p-100>
        <Component {...pageProps} />
      </Box>
    </Box>
  )
}
