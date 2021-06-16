import React, { FC, ReactNode, useState } from 'react'
import { forwardRef } from '@bone-ui/utils'
import { Box } from '@fower/react'
import { RadioGroup, RadioGroupProps, useRadioGroup } from '@bone-ui/radio'

export interface TabsProps extends RadioGroupProps {
  hideDivider?: boolean
}

function getRadio({ children }: TabsProps, value: any): ReactNode | undefined {
  if (!children) return
  const nodes = Array.isArray(children) ? children : [children]
  if (!value) return nodes[0]
  return nodes.find((i: any) => {
    if (i?.props?.value) return i?.props?.value === value

    /** use label */
    return i?.props?.label === value
  })
}

export const Tabs: FC<TabsProps> = forwardRef((props: TabsProps, ref) => {
  const { onChange, hideDivider, ...rest } = props
  const { value, controlled } = useRadioGroup(props)
  let [node, setNode] = useState<any>(getRadio(props, value))

  if (controlled) {
    // TODO: hack，如果是受控模式，直接修改，避免重复渲染
    node = getRadio(props, value)
    rest.value = value
  }

  return (
    <RadioGroup
      ref={ref}
      column
      {...rest}
      onChange={(currentValue) => {
        if (!controlled) {
          setNode(getRadio(props, currentValue))
        }
        onChange && onChange(currentValue)
      }}
    >
      <Box
        className="bone-tab-header"
        spaceX-12
        w-100p
        toLeft
        borderB-1
        borderColor={hideDivider ? 'transparent' : '#f0f0f0'}
        mb-16
      >
        {props.children}
      </Box>

      <Box className="bone-tab-content" w-100p>
        {node?.props?.children || null}
      </Box>
    </RadioGroup>
  )
})
