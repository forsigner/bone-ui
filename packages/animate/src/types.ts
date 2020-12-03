import { CSSProperties } from 'react';
import { SpringConfig } from 'react-spring'

export interface BaseProps {
  children: any
  className?: string
  style?: CSSProperties
  config?: SpringConfig | ((key: string) => SpringConfig)
}
