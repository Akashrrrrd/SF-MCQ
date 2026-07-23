'use client'

import { useExam } from '@/lib/exam-context'
import { useState } from 'react'

export function ExamLanding() {
  const { startExam, setSelectedSet, selectedSet } = useExam()
  const [isStarting, setIsStarting] = useState(false)

  const handleStartExam = () => {
    if (selectedSet === null) {
      alert('Please select a set before starting the exam')
      return
    }
    setIsStarting(true)
    startExam()
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-lg sm:max-w-2xl space-y-6 sm:space-y-8">
        {/* Header - Clean and Professional */}
        <div className="text-center space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Salesforce MCQ Practice
          </h1>
        
          {/* Quick Info - Single Horizontal Row */}
          <div className="flex justify-center items-center gap-8 sm:gap-12">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary">50</div>
              <div className="text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wide">Questions</div>
            </div>
            <div className="text-muted-foreground text-xl sm:text-2xl">:</div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary">60</div>
              <div className="text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wide">Minutes</div>
            </div>
            <div className="text-muted-foreground text-xl sm:text-2xl">:</div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary">30</div>
              <div className="text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wide">To Pass</div>
            </div>
          </div>

          {/* Set Selection Dropdown */}
          <div className="space-y-3 sm:space-y-4 py-4 sm:py-6">
            <label htmlFor="exam-set" className="block text-sm sm:text-base font-medium text-foreground">
              Select Exam Set
            </label>
            <select
              id="exam-set"
              value={selectedSet ?? ''}
              onChange={(e) => setSelectedSet(Number(e.target.value))}
              className="w-full px-4 py-2 sm:py-3 rounded-lg border border-input bg-background text-foreground font-medium text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
            >
              <option value="">-- Choose a Set --</option>
              <option value="1">Set 1 (Questions 1-50)</option>
              <option value="2">Set 2 (Questions 51-100)</option>
              <option value="3">Set 3 (Questions 101-150)</option>
              <option value="4">Set 4 (Questions 151-200)</option>
              <option value="5">Set 5 (Questions 201-250)</option>
              <option value="6">Set 6 (Questions 251-300)</option>
              <option value="7">Set 7 (Questions 301-350)</option>
            </select>
          </div>

          {/* Start Button - Clean Design */}
          <button
            onClick={handleStartExam}
            disabled={selectedSet === null || isStarting}
            className="w-full py-3 sm:py-4 rounded-lg bg-primary text-primary-foreground font-medium text-base sm:text-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isStarting ? 'STARTING...' : 'START EXAM'}
          </button>
        </div>
      </div>
    </div>
  )
}
