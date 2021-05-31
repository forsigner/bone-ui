import React, { forwardRef, useMemo, useState } from 'react'
import { Box } from '@fower/react'
import { DropdownProvider } from './dialogContext'
import { DropdownContext, DropdownProps, DropdownState } from './types'

export const Dialog = forwardRef<HTMLDivElement, Partial<DropdownProps>>((props, ref) => {
  const {
    children,
    isLazy,
    initialOpened,
    placement,
    autoClose,
    rootId = 'bone-ui-dialog-root',
    showMask,
    portal,
    onClose,
    onOpen,
    ...rest
  } = props  as any

  const [state, setState] = useState({
    isOpen: initialOpened,
  } as DropdownState)

  useInitialDropdownRoot(rootId)

  const ctxValue: DropdownContext = {
    state,
    setState,
    dropdownProps: {
      isLazy,
      initialOpened,
      placement,
      autoClose,
      rootId,
      showMask,
      portal,
      onClose,
      onOpen,
    } as any,
    open() {
      setState((prev) => ({
        ...prev,
        isOpen: true,
      }))
      onOpen?.()
    },
    close() {
      setState((prev) => ({
        ...prev,
        isOpen: false,
      }))
      onClose?.()
    },
    getRenderProps() {
      return {
        isOpen: state.isOpen,
        close: ctxValue.close,
        open: ctxValue.open,
      }
    },
  }

  const renderProps = ctxValue.getRenderProps()

  return (
    <DropdownProvider value={ctxValue}>
      <Box ref={ref} {...rest}>
        {typeof children === 'function' ? (children as any)(renderProps) : children}
      </Box>
    </DropdownProvider>
  )
})

function useInitialDropdownRoot(rootId: string) {
  let $root = document.getElementById(rootId)

  useMemo(() => {
    if (!$root) $root = document.createElement('div')

    $root.setAttribute('id', rootId)

    // set style
    $root.style.zIndex = '2000'
    $root.style.position = 'relative'

    document.body.appendChild($root)
  }, [])
}
