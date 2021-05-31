import React, { useState } from 'react'
import { Tooltip } from '@bone-ui/tooltip'
import { Button } from '@bone-ui/button'
import { Box } from '@fower/react'

export default function TooltipDemo() {
  const [isOpened, setIsOpened] = useState(true)
  const [isOpened2, setIsOpened2] = useState(true)
  const [isOpened3, setIsOpened3] = useState(true)
  const [isOpened4, setIsOpened4] = useState(true)
  const [isOpened6, setIsOpened6] = useState(true)

  return (
    <Box space-200>
      <div>gogo..</div>
      <Tooltip label="66666666" isOpened={isOpened} bg="rgba(91, 155, 254, 0.15)" placement="top">
        <Button onClick={() => setIsOpened(!isOpened)}>Top</Button>
      </Tooltip>

      <Tooltip
        label="66666666"
        isOpened={isOpened2}
        bg="rgba(91, 155, 254, 0.15)"
        placement="bottom"
      >
        <Button onClick={() => setIsOpened2(!isOpened2)}>Bottom</Button>
      </Tooltip>

      <Tooltip label="66666666" isOpened={isOpened3} bg="rgba(91, 155, 254, 0.15)" placement="left">
        <Button onClick={() => setIsOpened3(!isOpened3)}>Left</Button>
      </Tooltip>

      <Tooltip
        label="66666666"
        isOpened={isOpened4}
        bg="rgba(91, 155, 254, 0.15)"
        placement="right"
      >
        <Button onClick={() => setIsOpened4(!isOpened4)}>Right</Button>
      </Tooltip>

      <Tooltip label="66666666" isOpened={isOpened6} bg="rgba(91, 155, 254, 0.15)" placement="left">
        <Button onMouseEnter={() => setIsOpened6(true)} onMouseLeave={() => setIsOpened6(false)}>
          Hover
        </Button>
      </Tooltip>
    </Box>
  )
}
