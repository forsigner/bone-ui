import React, { forwardRef } from 'react'
import { Box } from '@fower/react'
import { AtomicProps, FowerHTMLProps } from '@fower/types'

export interface IconProps extends FowerHTMLProps<'svg'> {
  fill?: 'none' | 'currentColor'
  strokeWidth?: number

  size?: number
}

export interface IconifyOptions {
  /**
   * The icon `svg` viewBox
   * @default "0 0 24 24"
   */
  viewBox?: string

  /**
   * The `svg` path or group element
   * @type React.ReactElement | React.ReactElement[]
   */
  path?: React.ReactElement | React.ReactElement[]

  /**
   * If the has a single path, simply copy the path's `d` attribute
   */
  d?: string

  fill?: 'none' | 'currentColor'

  displayName?: string

  atomicProps?: AtomicProps

  pathProps?: {
    strokeLinecap?: 'butt' | 'round' | 'square' | 'inherit'
    strokeLinejoin?: 'miter' | 'round' | 'bevel' | 'inherit'
    strokeWidth?: number
    fillRule?: 'nonzero' | 'evenodd' | 'inherit'
    fill?: string
    clipRule?: number | string
  }
}

export function iconify(options: IconifyOptions) {
  const { viewBox, d, fill = 'none', path, displayName, atomicProps = {} } = options

  const Comp = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    const svgFill = props.fill || fill
    const isOutline = svgFill === 'none'
    const size = isOutline ? 24 : 20
    const svgPros = isOutline ? { stroke: 'currentColor' } : {}
    let pathProps: any = {}

    if (options.pathProps) {
      pathProps = options.pathProps
    } else {
      pathProps = isOutline
        ? {
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: props.strokeWidth || 2,
          }
        : {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
          }
    }

    return (
      <Box
        as="svg"
        ref={ref}
        className={`bone-icon bone-icon--${displayName}`}
        {...atomicProps}
        square={props.size || atomicProps?.square || 24}
        fill={svgFill}
        viewBox={viewBox || `0 0 ${size} ${size}`}
        {...svgPros}
        xmlns="http://www.w3.org/2000/svg"
        {...(props as any)}
      >
        {path ?? <path {...pathProps} d={d} />}
      </Box>
    )
  })

  if (displayName) Comp.displayName = displayName

  return Comp
}
