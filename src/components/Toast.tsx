import React, { useState, useCallback } from 'react'
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react'
import { ToastContext, ToastMessage, ToastType } from './useToast'

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastMessage[]>([])

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const showToast = useCallback(
    (message: string, type: ToastType = 'success', title?: string, duration = 3200) => {
      const id = Math.random().toString(36).substring(2, 9)
      const newToast: ToastMessage = { id, message, type, title, duration }
      setToasts((prev) => [...prev, newToast])

      if (duration > 0) {
        setTimeout(() => {
          removeToast(id)
        }, duration)
      }
    },
    [removeToast],
  )

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="toast-viewport" role="region" aria-label="Notifications" aria-live="polite">
        {toasts.map((toast) => (
          <div key={toast.id} className={`toast-item toast-${toast.type || 'success'}`}>
            <div className="toast-icon">
              {toast.type === 'error' ? (
                <AlertCircle size={18} />
              ) : toast.type === 'info' ? (
                <Info size={18} />
              ) : (
                <CheckCircle2 size={18} />
              )}
            </div>
            <div className="toast-content">
              {toast.title && <strong className="toast-title">{toast.title}</strong>}
              <span className="toast-message">{toast.message}</span>
            </div>
            <button
              className="toast-close"
              onClick={() => removeToast(toast.id)}
              aria-label="Dismiss notification"
            >
              <X size={15} />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}
