'use client'

import { useExam } from '@/lib/exam-context'

export function ExamLanding() {
  const { startExam } = useExam()

  return (
    <div className="min-h-screen bg-background flex flex-col justify-center items-center p-4 sm:p-6">
      <div className="w-full max-w-lg sm:max-w-2xl space-y-6 sm:space-y-8">
        {/* Header - Mobile Optimized */}
        <div className="text-center space-y-3 sm:space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
            Salesforce MCQ<br className="sm:hidden" />
            <span className="text-primary"> Practice Exam</span>
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground font-medium">
            Test your Salesforce knowledge with 350+ questions
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            50 Questions • 75 Minutes
          </div>
        </div>

        {/* Exam Stats Grid - Mobile Friendly */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 py-6 sm:py-8">
          <div className="text-center bg-card border border-border rounded-lg p-3 sm:p-4">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">50</div>
            <div className="text-xs sm:text-sm text-muted-foreground font-medium">Questions</div>
          </div>
          <div className="text-center bg-card border border-border rounded-lg p-3 sm:p-4">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">75</div>
            <div className="text-xs sm:text-sm text-muted-foreground font-medium">Minutes</div>
          </div>
          <div className="text-center bg-card border border-border rounded-lg p-3 sm:p-4">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">30</div>
            <div className="text-xs sm:text-sm text-muted-foreground font-medium">To Pass</div>
          </div>
        </div>

        {/* Important Notes - Mobile Optimized */}
        <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 sm:p-5 space-y-2">
          <h3 className="font-semibold text-amber-800 dark:text-amber-200 text-sm sm:text-base">
            📋 Exam Instructions
          </h3>
          <ul className="text-xs sm:text-sm text-amber-700 dark:text-amber-300 space-y-1 list-disc list-inside">
            <li>You have 75 minutes to complete 50 questions</li>
            <li>You need 30 correct answers (60%) to pass</li>
            <li><strong>Unanswered questions will count as wrong</strong></li>
            <li>Review your answers before finishing the test</li>
          </ul>
        </div>

        {/* Start Button - Mobile Optimized */}
        <button
          onClick={startExam}
          className="w-full py-3 sm:py-4 rounded-lg bg-primary text-primary-foreground font-medium text-base sm:text-lg hover:bg-primary/90 active:scale-[0.98] transition-all duration-200 shadow-lg"
        >
          🚀 START PRACTICE EXAM
        </button>

        {/* Footer Note */}
        <div className="text-center text-xs sm:text-sm text-muted-foreground">
          Questions cover 17+ Salesforce topics including Apex, LWC, and Data Cloud
        </div>
      </div>
    </div>
  )
}
