import { FowerHTMLProps } from '@fower/types'
import { Placement } from '@popperjs/core'
import { ReactNode } from 'react'

export interface DropdownState {
  isOpen: boolean
  referenceElement: HTMLDivElement
  popperElement: HTMLDivElement
}

export interface DropdownContext {
  state: DropdownState

  dropdownProps: DropdownProps

  setState: any

  /**
   * Open dropdown content
   */
  open(): void

  /**
   * Close dropdown content
   */
  close(): void

  getRenderProps(): {
    isOpen: boolean
    open(): void
    close(): void
  }
}

export interface DropdownRenderProps {
  isOpen: boolean
  open(): void
  close(): void
}

export interface DropdownTriggerProps extends FowerHTMLProps<'div'> {
  children: ((props: DropdownRenderProps) => ReactNode) | ReactNode
}

export interface DropdownProps {
  isLazy?: boolean

  /**
   * 初始化时是否打开
   */
  initialOpened?: boolean

  /**
   * 放置位置
   */
  placement?: Placement

  /**
   * 点击 body 是否自动关闭
   */
  autoClose?: boolean

  showMask?: boolean

  manualTrigger?: boolean

  portal?: boolean

  /**
   * offset={[{{Skidding}}, {{Distance}}]}
   * @see https://popper.js.org/docs/v2/modifiers/offset/
   */
  offset?: [number, number]

  /**
   * @default true
   * @see https://popper.js.org/docs/v2/modifiers/compute-styles/#gpuacceleration
   */
  gpuAcceleration?: boolean

  /**
   * 关闭时回调
   */
  onClose?(): void

  /**
   * 打开时回调
   */
  onOpen?(): void

  // children: ((props: DropdownRenderProps) => ReactNode) | ReactNode
  children: any
}

export interface UseDropdownReturn extends DropdownContext {}
