'use client'

import { useEffect, useState } from 'react'
import { AlertTriangle } from 'lucide-react'

interface ExamTimerProps {
  startedAt: Date
  onTimeUp: () => void
}

const TOTAL_TIME_MINUTES = 75
const TOTAL_TIME_SECONDS = TOTAL_TIME_MINUTES * 60

export function ExamTimer({ startedAt, onTimeUp }: ExamTimerProps) {
  const [remaining, setRemaining] = useState(TOTAL_TIME_SECONDS)
  const [isWarning, setIsWarning] = useState(false)
  const [isTimeUp, setIsTimeUp] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startedAt.getTime()) / 1000)
      const newRemaining = TOTAL_TIME_SECONDS - elapsed

      if (newRemaining <= 0) {
        setRemaining(0)
        setIsTimeUp(true)
        onTimeUp()
        clearInterval(interval)
      } else {
        setRemaining(newRemaining)
        setIsWarning(newRemaining <= 300) // 5 minutes warning
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [startedAt, onTimeUp])

  const minutes = Math.floor(remaining / 60)
  const seconds = remaining % 60
  const displayMinutes = String(minutes).padStart(2, '0')
  const displaySeconds = String(seconds).padStart(2, '0')

  const percentage = (remaining / TOTAL_TIME_SECONDS) * 100

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">Time Remaining</span>
        <div className={`text-2xl font-bold font-mono ${
          isTimeUp ? 'text-destructive' : isWarning ? 'text-amber-500' : 'text-foreground'
        }`}>
          {displayMinutes}:{displaySeconds}
        </div>
      </div>
      
      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
        <div
          className={`h-full transition-all duration-1000 ${
            isTimeUp ? 'bg-destructive' : isWarning ? 'bg-amber-500' : 'bg-primary'
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>

      {isWarning && !isTimeUp && (
        <div className="flex items-center gap-2 text-xs text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950 p-2 rounded">
          <AlertTriangle className="w-4 h-4 flex-shrink-0" />
          <span>Less than 5 minutes remaining</span>
        </div>
      )}

      {isTimeUp && (
        <div className="flex items-center gap-2 text-xs text-destructive bg-destructive/10 p-2 rounded">
          <AlertTriangle className="w-4 h-4 flex-shrink-0" />
          <span>Time&apos;s up! Exam submitted automatically.</span>
        </div>
      )}
    </div>
  )
}
