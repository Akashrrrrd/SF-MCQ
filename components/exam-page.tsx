'use client'

import { useExam } from '@/lib/exam-context'
import { QuestionDisplay } from './question-display'
import { ExamResults } from './exam-results'
import { ExamLanding } from './exam-landing'

export function ExamPage() {
  const { questions, session, result, submitExam, resetExam, goToQuestion } = useExam()

  // Auto-submit when time is up
  const handleTimeUp = () => {
    submitExam()
  }

  const handleNext = () => {
    if (session && session.currentQuestionIndex < questions.length - 1) {
      goToQuestion(session.currentQuestionIndex + 1)
    }
  }

  const handleBack = () => {
    if (session && session.currentQuestionIndex > 0) {
      goToQuestion(session.currentQuestionIndex - 1)
    }
  }

  // Show landing if not started
  if (!session && !result) {
    return <ExamLanding />
  }

  // Show results if submitted
  if (result) {
    return <ExamResults result={result} onReset={resetExam} />
  }

  // Show exam
  if (!session) return null

  const currentQuestion = questions[session.currentQuestionIndex]
  const selectedAnswer = session.answers[currentQuestion.id] ?? null
  const isLastQuestion = session.currentQuestionIndex === questions.length - 1
  
  // Calculate answered questions count
  const answeredCount = Object.values(session.answers).filter(answer => answer !== null && answer !== undefined).length

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Mobile-Optimized Top Progress Bar */}
      <div className="w-full bg-background border-b border-border p-2 sm:p-4">
        <div className="max-w-full mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:space-y-0 mb-2 sm:mb-3">
            {/* Progress Bar */}
            <div className="flex-1 h-1.5 sm:h-2 bg-muted rounded-sm overflow-hidden">
              <div className="h-full bg-primary transition-all duration-300"
                style={{ width: `${((session.currentQuestionIndex + 1) / questions.length) * 100}%` }}
              />
            </div>
            
            {/* Stats and Finish Button */}
            <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="text-xs font-medium text-muted-foreground whitespace-nowrap">
                  Answered: <span className="text-primary">{answeredCount}</span>/{questions.length}
                </div>
                <div className="text-xs font-medium text-foreground whitespace-nowrap">
                  Q<span className="text-primary">{session.currentQuestionIndex + 1}</span>/{questions.length}
                </div>
              </div>
              <button
                onClick={() => {
                  if (confirm('Are you sure you want to finish the test? Unanswered questions will be marked as wrong.')) {
                    submitExam()
                  }
                }}
                className="px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-xs sm:text-sm transition-colors whitespace-nowrap"
              >
                Finish Test
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Mobile Optimized */}
      <main className="flex-1 overflow-y-auto pb-safe">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8 lg:py-12">
          <QuestionDisplay
            question={currentQuestion}
            questionNumber={session.currentQuestionIndex + 1}
            totalQuestions={questions.length}
            selectedAnswer={selectedAnswer}
            onTimeUp={handleTimeUp}
          />
        </div>
      </main>

      {/* Mobile-Friendly Bottom Navigation */}
      <div className="bg-background border-t border-border p-3 sm:p-6 lg:p-8 pb-safe">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-3 sm:gap-4">
          <button
            onClick={handleBack}
            disabled={session.currentQuestionIndex === 0}
            className="flex-1 sm:flex-none px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-md text-foreground hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium text-sm border border-border bg-background"
          >
            ← Back
          </button>
          
          {!isLastQuestion && (
            <button
              onClick={handleNext}
              className="flex-1 sm:flex-none px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-sm transition-colors"
            >
              Next →
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
