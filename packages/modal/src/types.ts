import { FowerHTMLProps } from '@fower/types'
import { ReactNode } from 'react'

export interface ModalState {
  isOpen: boolean
  referenceElement: HTMLDivElement
  popperElement: HTMLDivElement
}

export interface ModalContext {
  state: ModalState

  setState: any

  open(): void
  close(): void
}

export interface ModalRenderProps {
  isOpen: boolean
  open(): void
  close(): void
}

export interface ModalOwnProps {
  isLazy?: boolean

  /**
   * 初始化时是否打开
   */
  isOpen?: boolean

  /**
   * 点击 body 是否自动关闭
   */
  autoClose?: boolean

  portal?: boolean

  /**
   * 关闭时回调
   */
  onClose?(): void

  /**
   * 打开时回调
   */
  onOpen?(): void
}

export interface ModalOverlayProps extends FowerHTMLProps<'div'> {
  children: ReactNode
}

export interface ModalContentProps extends FowerHTMLProps<'div'> {
  children: ReactNode
}

export interface ModalProps extends FowerHTMLProps<'div'>, ModalOwnProps {
  children: ReactNode
}
