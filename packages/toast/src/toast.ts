import { ReactNode } from 'react'
import { mutate } from 'stook'
import { key, Notification } from './toast.store'

interface Options {
  title: string
  description: string
  // status: 'warning'
  duration: number
  closable: true
}

function show(msg: ReactNode, options = { duration: 2000 } as Options) {
  mutate(key, (state: Notification[]) => {
    const id = state.push({
      id: state.length,
      msg,
    })

    setTimeout(() => {
      mutate(key, (state: Notification[]) => {
        const index = state.findIndex((i) => i.id === id - 1)
        state.splice(index, 1)
      })
    }, options.duration)
  })
}

export const toast = {
  info(msg: ReactNode, options = { duration: 2000 } as Options) {
    show(msg, options)
  },

  success(msg: ReactNode, options = { duration: 2000 } as Options) {
    show(msg, options)
  },

  error(msg: ReactNode, options = { duration: 2000 } as Options) {
    show(msg, options)
  },

  warning(msg: ReactNode, options = { duration: 2000 } as Options) {
    show(msg, options)
  },
}
