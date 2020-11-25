import { RefObject } from 'react'
import useOnclickOutside, { Callback } from 'react-cool-onclickoutside'

interface Options {
  refs?: RefObject<HTMLElement>[]
  disabled?: boolean
  eventTypes?: string[]
  excludeScrollbar?: boolean
  ignoreClass?: string
}

interface Return {
  (element: HTMLElement | null): void
}

export function useClickAway(callback: Callback, options?: Options): Return {
  return useOnclickOutside(callback, options)
}
