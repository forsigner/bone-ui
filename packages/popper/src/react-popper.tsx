import React from 'react'
import {
  createPopper as defaultCreatePopper,
  Instance,
  Modifier,
  Options as PopperOptions,
  VirtualElement,
} from '@popperjs/core'
import isEqual from 'react-fast-compare'
import { useSafeLayoutEffect } from '@bone-ui/hooks'
import { fromEntries } from '@bone-ui/utils'

type Options = Partial<PopperOptions> & {
  createPopper?: typeof defaultCreatePopper
}

type State = {
  styles: {
    [key: string]: Partial<React.CSSProperties>
  }
  attributes: {
    [key: string]: { [key: string]: string }
  }
}

const EMPTY_MODIFIERS: any[] = []

export const usePopper = (
  referenceElement: Element | VirtualElement,
  popperElement: HTMLElement,
  options: Options = {},
) => {
  const prevOptions = React.useRef<any>(null)

  const optionsWithDefaults = {
    onFirstUpdate: options.onFirstUpdate,
    placement: options.placement || 'bottom',
    strategy: options.strategy || 'absolute',
    modifiers: options.modifiers || EMPTY_MODIFIERS,
  }

  const [state, setState] = React.useState<State>({
    styles: {
      popper: {
        position: optionsWithDefaults.strategy,
        left: '0',
        top: '0',
      },
      arrow: {
        position: 'absolute',
      },
    },
    attributes: {},
  })

  const updateStateModifier: Modifier<'updateState', any> = React.useMemo(
    () => ({
      name: 'updateState',
      enabled: true,
      phase: 'write',
      fn: ({ state }) => {
        const elements = Object.keys(state.elements)

        setState({
          styles: fromEntries(elements.map((element) => [element, state.styles[element] || {}])),
          attributes: fromEntries(elements.map((element) => [element, state.attributes[element]])),
        })
      },
      requires: ['computeStyles'],
    }),
    [],
  )

  const popperOptions = React.useMemo(() => {
    const newOptions = {
      onFirstUpdate: optionsWithDefaults.onFirstUpdate,
      placement: optionsWithDefaults.placement,
      strategy: optionsWithDefaults.strategy,
      modifiers: [
        ...optionsWithDefaults.modifiers,
        updateStateModifier,
        { name: 'applyStyles', enabled: false },
      ],
    }

    if (isEqual(prevOptions.current, newOptions)) {
      return prevOptions.current || newOptions
    } else {
      prevOptions.current = newOptions
      return newOptions
    }
  }, [
    optionsWithDefaults.onFirstUpdate,
    optionsWithDefaults.placement,
    optionsWithDefaults.strategy,
    optionsWithDefaults.modifiers,
    updateStateModifier,
  ])

  const popperInstanceRef = React.useRef<Instance | null>()

  useSafeLayoutEffect(() => {
    if (popperInstanceRef.current) {
      popperInstanceRef.current.setOptions(popperOptions)
    }
  }, [popperOptions])

  useSafeLayoutEffect(() => {
    if (referenceElement == null || popperElement == null) {
      return
    }

    const createPopper = options.createPopper || defaultCreatePopper
    const popperInstance = createPopper(referenceElement, popperElement, popperOptions)

    popperInstanceRef.current = popperInstance

    return () => {
      popperInstance.destroy()
      popperInstanceRef.current = null
    }
  }, [referenceElement, popperElement, options.createPopper])

  return {
    state: popperInstanceRef.current ? popperInstanceRef.current.state : null,
    styles: state.styles,
    attributes: state.attributes,
    update: popperInstanceRef.current ? popperInstanceRef.current.update : null,
    forceUpdate: popperInstanceRef.current ? popperInstanceRef.current.forceUpdate : null,
  }
}
