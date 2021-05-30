import React, { forwardRef, ReactNode, useState } from 'react'
import { Box } from '@fower/react'
import { RadioGroup, RadioGroupProps } from '@bone-ui/radio'

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

export const Tabs = forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
  const { onChange, hideDivider, ...rest } = props
  const [node, setNode] = useState<any>(getRadio(props, props.value))
  return (
    <RadioGroup
      {...rest}
      ref={ref}
      column
      value={props.value || node?.props?.value || node?.props?.label}
      onChange={(currentValue) => {
        setNode(getRadio(props, currentValue))
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
