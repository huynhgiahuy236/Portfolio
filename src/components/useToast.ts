import { createContext, useContext } from 'react'

export type ToastType = 'success' | 'info' | 'error'

export interface ToastMessage {
  id: string
  title?: string
  message: string
  type?: ToastType
  duration?: number
}

export interface ToastContextValue {
  showToast: (message: string, type?: ToastType, title?: string, duration?: number) => void
}

export const ToastContext = createContext<ToastContextValue | null>(null)

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}
