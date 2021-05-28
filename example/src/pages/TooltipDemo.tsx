import React, { useState } from 'react'
import { Tooltip } from '@bone-ui/tooltip'
import { Button, ButtonGroup } from '@bone-ui/button'
import { Box, Heading } from '@styli/react'
import { CloseButton } from '@bone-ui/close-button'

export default function TooltipDemo() {
  const [isOpened, setIsOpened] = useState(true)
  const [isOpened2, setIsOpened2] = useState(true)
  const [isOpened3, setIsOpened3] = useState(true)
  const [isOpened4, setIsOpened4] = useState(true)
  const [isOpened5, setIsOpened5] = useState(true)
  const [isOpened6, setIsOpened6] = useState(true)
  const [isOpened7, setIsOpened7] = useState(true)

  return (
    <Box space-200>
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

      <Tooltip
        label={
          <Box>
            <Heading row centerY justifyBetween>
              <Box>This.is.title </Box>
              <CloseButton onClick={() => setIsOpened5(false)} />
            </Heading>
            <Box>
              contentcontentcontentcontentcontentcontentcontentcontentcontent
              contentcontentcontentcontentcontentcontentcontentcontentcontent
              contentcontentcontentcontentcontentcontentcontentcontentcontent
              contentcontentcontentcontentcontentcontentcontentcontentcontent
              contentcontentcontentcontentcontentcontentcontentcontentcontent
            </Box>
            <Box as="footer">this is footer</Box>
          </Box>
        }
        isOpened={isOpened5}
        bg="rgba(91, 155, 254, 0.15)"
        placement="bottom"
      >
        <Button onClick={() => setIsOpened5(!isOpened5)}>哈哈</Button>
      </Tooltip>

      <Tooltip label="66666666" isOpened={isOpened6} bg="rgba(91, 155, 254, 0.15)" placement="left">
        <Button onMouseEnter={() => setIsOpened6(true)} onMouseLeave={() => setIsOpened6(false)}>
          Hover
        </Button>
      </Tooltip>

      <Tooltip
        label={
          <ButtonGroup row justifyBetween>
            <Button size="xs" colorMode="light" onClick={() => setIsOpened7(!isOpened7)}>
              取消
            </Button>
            <Button size="xs">删除</Button>
          </ButtonGroup>
        }
        isOpened={isOpened7}
        bg="#FFF"
        placement="top"
      >
        <Button onClick={() => setIsOpened7(!isOpened7)}>编辑</Button>
      </Tooltip>
    </Box>
  )
}
