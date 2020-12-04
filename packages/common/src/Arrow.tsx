import React from 'react'
import { Box } from '@styli/react'

type Direction = 'top' | 'bottom' | 'left' | 'right'

interface ArrowProps {
  direction: Direction
  color?: string
  width?: number
}

export const Arrow = (props: ArrowProps) => {
  const { direction, color = 'red', width = 5, ...rest } = props

  return <Box absolute {...getStyle(direction, width, color)} {...rest} />
}

function getStyle(direction: Direction, width: number, color: string) {
  const cssAfter = {
    display: 'block',
    content: '""',
    width: 0,
    height: 0,
    border: `${width}px solid transparent`,
  }

  switch (direction) {
    case 'top':
      return {
        T: `-${width * 3}px`,
        L: '50%',
        css: {
          transform: `translate(-50%, 50%)`,
          '::after': {
            ...cssAfter,
            borderBottom: `${width}px solid ${color}`,
          },
        },
      }
    case 'bottom':
      return {
        B: `-${width}px`,
        L: '50%',
        css: {
          transform: `translate(-50%, 50%)`,
          '::after': {
            ...cssAfter,
            borderTop: `${width}px solid ${color}`,
          },
        },
      }
    case 'left':
      return {
        T: '50%',
        L: `-${width * 2}px`,
        css: {
          transform: `translate(0, -50%)`,
          '::after': {
            ...cssAfter,
            borderRight: `${width}px solid ${color}`,
          },
        },
      }
    case 'right':
      return {
        T: '50%',
        R: 0,
        css: {
          transform: `translate(100%, -50%)`,
          '::after': {
            ...cssAfter,
            borderLeft: `${width}px solid ${color}`,
          },
        },
      }
    default: {
      return {
        B: `-${width}px`,
        L: '50%',
        css: {
          transform: `translate(-50%, 50%)`,
          '::after': {
            ...cssAfter,
            borderTop: `${width}px solid ${color}`,
          },
        },
      }
    }
  }
}
