import React from 'react'
import { Box } from '@fower/react'
import { ItemButton } from './items/ItemButton'
import { ItemSwitch } from './items/ItemSwitch'
import { Item } from './Item'
import { ItemTag } from './items/ItemTag'
import { ItemSpinner } from './items/ItemSpinner'

const list: [string, any][] = [
  ['Alert', ItemSwitch],
  ['Avatar', ItemSwitch],
  ['Badge', ItemSwitch],
  ['Button', ItemButton],
  ['Card', ItemButton],
  ['Close-Button', ItemButton],
  ['divider', ItemButton],
  ['dot', ItemButton],
  ['input', ItemButton],
  ['Switch', ItemSwitch],
  ['Tag', ItemTag],
  ['Spinner', ItemSpinner],
]

export function ComponentList() {
  return (
    <Box mt10 mx-auto px10 flexWrap="wrap" grid gridTemplateColumns-6 gap-16 toLeft>
      {list.map(([title, Comp]) => (
        <Item key={title} title={title}>
          <Comp></Comp>
        </Item>
      ))}
    </Box>
  )
}
