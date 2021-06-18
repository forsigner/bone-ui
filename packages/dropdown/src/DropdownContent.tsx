import React, { FC, ReactNode, useCallback } from 'react'
import { forwardRef } from '@bone-ui/utils'
import { FowerHTMLProps } from '@fower/types'
import { Portal } from '@bone-ui/portal'
import { Variants } from 'framer-motion'
import { useOutsideClick } from '@bone-ui/hooks'
import { Box } from '@fower/react'
import { useDropdownContext } from './context'
import { usePopper } from '@bone-ui/popper'
import { styled } from '@fower/styled'
import { motion } from 'framer-motion'
import { DropdownRenderProps } from './types'

const AnimatedDiv = styled(motion.div)

const variants: Variants = {
  enter: {
    visibility: 'visible',
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    transitionEnd: {
      visibility: 'hidden',
    },
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.1,
      easings: 'easeOut',
    },
  },
}

export interface DropdownContentProps extends FowerHTMLProps<'div'> {
  children: ((props: DropdownRenderProps) => ReactNode) | ReactNode
}

export const DropdownContent: FC<DropdownContentProps> = forwardRef(
  (props: DropdownContentProps, ref) => {
    const { children, ...rest } = props
    const ctx = useDropdownContext()
    const { close, state, dropdownProps } = ctx
    const { isOpen, referenceElement, popperElement } = state
    const { showMask, portal = true, placement = 'bottom', offset, gpuAcceleration } = dropdownProps
    const renderProps = ctx.getRenderProps()

    const { styles, attributes } = usePopper(referenceElement, popperElement, {
      placement,
      modifiers: [
        {
          name: 'offset',
          options: { offset },
        },
        {
          name: 'computeStyles',
          options: { gpuAcceleration },
        },
      ],
    })

    const refCallback = useCallback((node) => {
      ref = node
      ctx.setState((prev: any) => {
        return { ...prev, popperElement: ref }
      })
    }, [])

    useOutsideClick({
      ref: { current: referenceElement },
      handler(e) {
        if (!e.target || !popperElement) return

        const isContain = popperElement.contains(e.target as any)

        if (isContain) return // 点击 body 不关闭

        if (isOpen) close()
      },
    })

    const content = (
      <>
        {showMask && isOpen && (
          <Box
            onClick={(e) => {
              e.stopPropagation()
              if (isOpen) close()
            }}
            className="bone-dropdown-mask"
            display={isOpen ? 'block' : 'none'}
            bgTransparent
            fixed
            w-100p
            h-100p
            top0
            left0
            zIndex-1000
          ></Box>
        )}
        <Box
          ref={refCallback}
          {...rest}
          zIndex-1000
          style={{
            ...styles.popper,
            visibility: isOpen ? 'visible' : 'hidden',
          }}
          {...attributes.popper}
        >
          <AnimatedDiv
            shadow
            variants={variants}
            initial={false}
            animate={isOpen ? 'enter' : 'exit'}
            style={{ transformOrigin: 'center top' }}
            {...(rest as any)}
          >
            {typeof children === 'function' ? (children as any)(renderProps) : children}
          </AnimatedDiv>
        </Box>
      </>
    )

    if (!portal) return content

    return <Portal>{content}</Portal>
  },
)
