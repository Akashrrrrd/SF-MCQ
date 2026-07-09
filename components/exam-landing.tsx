'use client'

import { useExam } from '@/lib/exam-context'

export function ExamLanding() {
  const { startExam } = useExam()

  return (
    <div className="min-h-screen bg-background flex flex-col justify-center items-center p-6">
      <div className="w-full max-w-2xl space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
            Salesforce MCQ Practice
          </h1>
          <p className="text-sm text-muted-foreground font-medium tracking-wide">
            50 QUESTIONS • 75 MINUTES
          </p>
        </div>

        {/* Quick Info */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2 tracking-tight">50</div>
            <div className="text-xs text-muted-foreground font-medium tracking-wide uppercase">Questions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2 tracking-tight">75</div>
            <div className="text-xs text-muted-foreground font-medium tracking-wide uppercase">Minutes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2 tracking-tight">30</div>
            <div className="text-xs text-muted-foreground font-medium tracking-wide uppercase">To Pass</div>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={startExam}
          className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium text-base hover:bg-primary/90 transition-colors mt-8 tracking-wide"
        >
          START EXAM
        </button>

        {/* Info Text - Removed internet connection warning */}
      </div>
    </div>
  )
}
