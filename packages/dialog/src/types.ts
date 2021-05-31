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

  setState: any

  dropdownProps: DropdownOwnProps

  open(): void
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

export interface DropdownOwnProps {
  isLazy?: boolean

  /**
   * 初始化时是否打开
   */
  initialOpened?: boolean

  /**
   * 放置位置
   */
  placement?: `${Placement}`

  /**
   * 点击 body 是否自动关闭
   */
  autoClose?: boolean

  showMask?: boolean

  portal?: boolean

  /**
   * body 挂载元素的 id
   */
  rootId?: string

  /**
   * 关闭时回调
   */
  onClose?(): void

  /**
   * 打开时回调
   */
  onOpen?(): void
}

export interface DropdownTriggerProps extends FowerHTMLProps<'div'> {
  children: ((props: DropdownRenderProps) => ReactNode) | ReactNode
}

export interface DropdownOverlayProps extends FowerHTMLProps<'div'> {
  children: ((props: DropdownRenderProps) => ReactNode) | ReactNode
}

export interface DropdownProps extends FowerHTMLProps<'div'>, DropdownOwnProps {
  children: ((props: DropdownRenderProps) => ReactNode) | ReactNode
}
