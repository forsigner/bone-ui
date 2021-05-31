import { ReactNode } from 'react'
import { useStore } from 'stook'

export interface Notification {
  id: number
  msg: ReactNode
}

export const key = '__bone_ui_toast__'

export function useToast() {
  const [notifications, setNotifications] = useStore<Notification[]>(key, [])
  return { notifications, setNotifications }
}
