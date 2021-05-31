import React, { forwardRef, useCallback, useContext } from 'react'
import { createPortal } from 'react-dom'
import { Variants } from 'framer-motion'
import { useOutsideClick } from '@bone-ui/hooks'
import { Box } from '@fower/react'
import { DropdownOverlayProps } from './types'
import { dropdownContext } from './dialogContext'
import { usePopper } from '@bone-ui/popper'
import { styled } from '@fower/styled'
import { motion } from 'framer-motion'

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

export const DialogOverlay = forwardRef<HTMLDivElement, Partial<DropdownOverlayProps>>(
  (props, ref) => {
    const { children, ...rest } = props
    const ctx = useContext(dropdownContext)
    const { close, state, dropdownProps } = ctx
    const { isOpen, referenceElement, popperElement } = state
    const { placement = 'bottom', rootId = 'bone-ui-dialog-root' } = dropdownProps as any // TODO: 
    const renderProps = ctx.getRenderProps()

    const { styles, attributes } = usePopper(referenceElement, popperElement, { placement })

    const refCallback = useCallback((node) => {
      ref = node
      ctx.setState((prev: any) => {
        return {
          ...prev,
          popperElement: ref,
        }
      })
    }, [])

    useOutsideClick({
      ref: { current: referenceElement },
      handler(e) {
        if (!e.target || !popperElement) return

        // TODO: hack, 点击 dialog 不关闭 dropdown
        if (document.getElementById('bone-ui-dialog-root')?.contains(e.target as any)) {
          return
        }

        const isContain = popperElement.contains(e.target as any)

        if (isContain) return // 点击 body 不关闭

        if (isOpen) close()
      },
    })

    const overlay = (
      <>
        <Box
          onClick={(e) => {
            e.stopPropagation()
            if (isOpen) close()
          }}
          className="bone-ui-dropdown-mask"
          display={isOpen ? 'block' : 'none'}
          bg="transparent"
          fixed
          w-100p
          h-100p
          top0
          left0
          zIndex-1
        ></Box>

        <Box
          ref={refCallback}
          {...rest}
          zIndex-2
          style={{
            ...styles.popper,
            visibility: isOpen ? 'visible' : 'hidden',
            // width: '200px',
          }}
          {...attributes.popper}
        >
          <AnimatedDiv
            bgWhite
            rounded-4
            shadow
            border
            // overflow="hidden"
            variants={variants}
            initial={false}
            animate={isOpen ? 'enter' : 'exit'}
            style={{
              transformOrigin: 'center top',
            }}
            {...(rest as any)}
          >
            {typeof children === 'function' ? (children as any)(renderProps) : children}
          </AnimatedDiv>
        </Box>
      </>
    )

    // if (!portal) return overlay

    return createPortal(overlay, document.getElementById(rootId) as HTMLDivElement)
  },
)
