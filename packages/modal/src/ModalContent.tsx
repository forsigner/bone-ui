import React, { forwardRef, useContext } from 'react'
import { Box } from '@fower/react'
import { ModalContentProps } from './types'
import { modalContext } from './modalContext'
import { styled } from '@fower/styled'
import { motion } from 'framer-motion'
import { fadeConfig } from '@bone-ui/motion-configs'


const AnimatedDiv = styled(motion.div)

export const ModalContent = forwardRef<HTMLDivElement, Partial<ModalContentProps>>((props, ref) => {
  const { children, ...rest } = props
  const ctx = useContext(modalContext)
  const { close } = ctx

  return (
    <Box
      ref={ref}
      onClick={() => {
        close()
      }}
      fixed
      w-100p
      h-100p
      top0
      left0
      zIndex-1001
    >
      <Box w-100p h-100p bgBlue100 toCenter bgTransparent>
        <AnimatedDiv
          onClick={(e) => {
            e.stopPropagation()
          }}
          className="bone-ui-modal-content"
          bgWhite
          rounded-4
          shadow
          // style={{ transformOrigin: 'center center' }}
          // {...scaleConfig}
          {...fadeConfig}
          {...(rest as any)}
        >
          {children}
        </AnimatedDiv>
      </Box>
    </Box>
  )
})
