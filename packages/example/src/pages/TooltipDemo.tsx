import React, { useEffect, useRef, useState } from 'react'
import { Tooltip } from '@bone-ui/tooltip'
import { Button } from '@bone-ui/button'
import { Box, Heading } from '@styli/react'
import { CloseButton } from '@bone-ui/close-button'

export default function TooltipDemo() {
  const [isOpened, setIsOpened] = useState(false)
  const [isOpened2, setIsOpened2] = useState(false)

  return (
    <Box spaceX-100>
      <Tooltip label="66666666" isOpened={isOpened}>
        <Button onClick={() => setIsOpened(!isOpened)}>哈哈</Button>
      </Tooltip>

      <Tooltip
        label={
          <Box>
            <Heading row centerY justifyBetween>
              <Box>This.is.title </Box><CloseButton onClick={() => setIsOpened2(false)} />
              </Heading>
            <Box>
              contentcontentcontentcontentcontentcontentcontentcontentcontent
              contentcontentcontentcontentcontentcontentcontentcontentcontent
              contentcontentcontentcontentcontentcontentcontentcontentcontent
              contentcontentcontentcontentcontentcontentcontentcontentcontent
              contentcontentcontentcontentcontentcontentcontentcontentcontent
            </Box>
            <Box as="footer">
              this is footer
            </Box>
          </Box>
        }
        isOpened={isOpened2}
        bg="rgba(91, 155, 254, 0.15)"
      >
        <Button onClick={() => setIsOpened2(!isOpened2)}>哈哈</Button>
      </Tooltip>
    </Box>
  )
}
