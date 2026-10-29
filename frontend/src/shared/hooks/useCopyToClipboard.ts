import { useCallback, useEffect, useRef, useState } from 'react'

const RESET_DELAY_MS = 2000

export const useCopyToClipboard = () => {
  const [copied, setCopied] = useState(false)
  const timer = useRef<number>()

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const copy = useCallback(async (value: string) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      window.clearTimeout(timer.current)
      timer.current = window.setTimeout(() => setCopied(false), RESET_DELAY_MS)
    } catch {
      setCopied(false)
    }
  }, [])

  return { copied, copy }
}
