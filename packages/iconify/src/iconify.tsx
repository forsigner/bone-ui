import React, { FC } from 'react'
import { forwardRef } from '@bone-ui/utils'
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

  const Comp: FC<IconProps> = forwardRef((props: IconProps, ref) => {
    const svgFill = props.fill || fill
    const isOutline = svgFill === 'none'
    const size = isOutline ? 24 : 20
    const svgProps: any = isOutline ? { strokeCurrent: true } : {}
    let pathProps: any = {}

    if (isOutline) {
      svgProps[`stroke-${props.strokeWidth || 2}`] = true
    }

    if (['none', 'currentColor'].includes(svgFill)) {
      if (svgFill === 'none') svgProps['fillNone'] = true
      if (svgFill === 'currentColor') svgProps['fillCurrent'] = true
    } else {
      svgProps.fill = svgFill
    }

    if (options.pathProps) {
      pathProps = options.pathProps
    } else {
      pathProps = isOutline
        ? { strokeLinecap: 'round', strokeLinejoin: 'round' }
        : { fillRule: 'evenodd', clipRule: 'evenodd' }
    }

    console.log('props:', props, Object.keys(props))
    for (const key in props) {
      if (Object.prototype.hasOwnProperty.call(props, key)) {
        console.log('key:', key)
      }
    }

    return (
      <Box
        as="svg"
        ref={ref}
        className={`bone-icon bone-icon--${displayName}`}
        {...atomicProps}
        square={props.size || atomicProps?.square || 24}
        viewBox={viewBox || `0 0 ${size} ${size}`}
        {...svgProps}
        xmlns="http://www.w3.org/2000/svg"
        {...(props as any)}
      >
        {path ?? <path {...pathProps} d={d} />}
      </Box>
    )
  })

  if (displayName) Comp.displayName = displayName
  ;(Comp as any).isBoneIcon = true

  return Comp
}
