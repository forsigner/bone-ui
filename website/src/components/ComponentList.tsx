import React from 'react'
import { Box } from '@fower/react'
import { ItemButton } from './items/ItemButton'
import { ItemSwitch } from './items/ItemSwitch'
import { Item } from './Item'
import { ItemTag } from './items/ItemTag'
import { ItemSpinner } from './items/ItemSpinner'
import { ItemAvatar } from './items/ItemAvatar'
import { ItemDot } from './items/ItemDot'
import { ItemInput } from './items/ItemInput'
import { ItemBadge } from './items/ItemBadge'
import { ItemAlert } from './items/ItemAlert'
import { ItemDivider } from './items/ItemDivider'

const list: [string, any][] = [
  ['Alert', ItemAlert],
  ['Avatar', ItemAvatar],
  ['Badge', ItemBadge],
  ['Button', ItemButton],
  ['Card', ItemButton],
  ['Close-Button', ItemButton],
  ['divider', ItemDivider],
  ['dot', ItemDot],
  ['input', ItemInput],
  ['Switch', ItemSwitch],
  ['Tag', ItemTag],
  ['Spinner', ItemSpinner],
]

export function ComponentList() {
  return (
    <Box mt10 mx-auto px10 flexWrap toCenter gap-16>
      {list.map(([title, Comp]) => (
        <Item key={title} title={title}>
          <Comp></Comp>
        </Item>
      ))}
    </Box>
  )
}
