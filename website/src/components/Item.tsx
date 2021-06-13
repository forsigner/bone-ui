import React, { FC } from 'react'
import { Box } from '@fower/react'
import Link from '@docusaurus/Link'
import { store } from '@fower/store'
import { Card } from '@bone-ui/card'
import { FowerHTMLProps } from '@fower/types'

interface Props extends FowerHTMLProps<'div'> {
  title: string
}

export const Item: FC<Props> = ({ children, title, ...rest }) => {
  const { colors } = store.theme
  const keys = Object.keys(colors).filter((i) => i.endsWith('300'))
  const index = (Math.random() * keys.length) >> 0
  const attr = { [`bg${keys[index]}--T90`]: true }
  return (
    <Link to={'/docs/' + title.toLowerCase()}>
      <Card ringGray100-2 shadowMD--hover borderNone p0 transitionCommon maxW-200 {...rest}>
        {React.cloneElement(children as any, {
          flex: true,
          'flex-1': true,
          flexWrap: 'wrap',
          h: 100,
          p4: true,
          ...attr,
        })}
        <Box p4 fontBold toCenter black bgWhite transitionCommon>
          {title}
        </Box>
      </Card>
    </Link>
  )
}
