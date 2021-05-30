import React, { forwardRef, useContext } from 'react'
import { ModalOverlayProps } from './types'
import { modalContext } from './modalContext'
import { styled } from '@fower/styled'
import { motion } from 'framer-motion'
import { fadeConfig } from '@bone-ui/motion-configs'

const AnimatedDiv = styled(motion.div)

export const ModalOverlay = forwardRef<HTMLDivElement, Partial<ModalOverlayProps>>((props, ref) => {
  const { children, ...rest } = props
  const ctx = useContext(modalContext)
  const { close } = ctx
  return (
    <AnimatedDiv
      ref={ref}
      onClick={() => {
        close()
      }}
      className="bone-ui-modal-overlay"
      fixed
      w-100p
      h-100p
      top0
      left0
      bgBlack--T70
      zIndex-1000
      {...(fadeConfig as any)}
      {...rest}
    ></AnimatedDiv>
  )
})
