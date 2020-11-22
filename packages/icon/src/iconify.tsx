import React, { forwardRef, HTMLAttributes } from 'react'
import { Svg } from '@styli/react'
import { AtomicProps } from '@styli/types'

type OmitHTMLAttributes = Omit<HTMLAttributes<SVGSVGElement>, 'size' | 'color'>
export interface IconProps
  extends React.DetailedHTMLProps<OmitHTMLAttributes, SVGSVGElement>,
    AtomicProps {
  fill?: 'none' | 'currentColor'
  strokeWidth?: number
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
}

export function iconify(options: IconifyOptions) {
  const { viewBox, d, fill = 'none', path, displayName } = options

  const Comp = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    const svgFill = props.fill || fill
    const isOutline = svgFill === 'none'
    const size = isOutline ? 24 : 20
    const pathProps: any = isOutline
      ? {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: props.strokeWidth || 2,
        }
      : {}

    return (
      <Svg
        ref={ref}
        className={`bone-icon bone-icon--${displayName}`}
        w-24
        h-24
        fill={svgFill}
        stroke="currentColor"
        viewBox={viewBox || `0 0 ${size} ${size}`}
        xmlns="http://www.w3.org/2000/svg"
        {...(props as any)}
      >
        {path ?? <path {...pathProps} d={d} />}
      </Svg>
    )
  })

  if (displayName) Comp.displayName = displayName

  return Comp
}
