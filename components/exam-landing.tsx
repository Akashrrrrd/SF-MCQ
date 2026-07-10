'use client'

import { useExam } from '@/lib/exam-context'

export function ExamLanding() {
  const { startExam } = useExam()

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-lg sm:max-w-2xl space-y-8 sm:space-y-10">
        {/* Header - Clean and Professional */}
        <div className="text-center space-y-6 sm:space-y-8">
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
              <div className="text-2xl sm:text-3xl font-bold text-primary">75</div>
              <div className="text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wide">Minutes</div>
            </div>
            <div className="text-muted-foreground text-xl sm:text-2xl">:</div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary">30</div>
              <div className="text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wide">To Pass</div>
            </div>
          </div>

          {/* Start Button - Clean Design */}
          <button
            onClick={startExam}
            className="w-full py-3 sm:py-4 rounded-lg bg-primary text-primary-foreground font-medium text-base sm:text-lg hover:bg-primary/90 transition-colors"
          >
            START EXAM
          </button>
        </div>
      </div>
    </div>
  )
}
