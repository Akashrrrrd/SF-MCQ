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
      {/* Top Progress Bar with Finish Test Button */}
      <div className="w-full bg-background border-b border-border p-4">
        <div className="max-w-full mx-auto px-8">
          <div className="flex items-center justify-between gap-4 mb-3">
            <div className="flex-1 h-1 bg-muted rounded-sm overflow-hidden">
              <div className="h-full bg-primary transition-all duration-300"
                style={{ width: `${((session.currentQuestionIndex + 1) / questions.length) * 100}%` }}
              />
            </div>
            <div className="flex items-center gap-6">
              <div className="text-xs font-medium text-muted-foreground whitespace-nowrap tracking-wide">
                Answered: {answeredCount} / {questions.length}
              </div>
              <div className="text-xs font-medium text-foreground whitespace-nowrap tracking-wide">
                {session.currentQuestionIndex + 1} / {questions.length}
              </div>
              <button
                onClick={() => {
                  if (confirm('Are you sure you want to finish the test? You cannot change your answers after submission.')) {
                    submitExam()
                  }
                }}
                className="px-6 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-xs transition-colors whitespace-nowrap"
              >
                Finish Test
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Scrollable */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-8 py-12">
          <QuestionDisplay
            question={currentQuestion}
            questionNumber={session.currentQuestionIndex + 1}
            totalQuestions={questions.length}
            selectedAnswer={selectedAnswer}
            onTimeUp={handleTimeUp}
          />
        </div>
      </main>

      {/* Bottom Navigation */}
      <div className="bg-background border-t border-border p-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          <button
            onClick={handleBack}
            disabled={session.currentQuestionIndex === 0}
            className="px-8 py-2.5 rounded-md text-foreground hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium text-sm"
          >
            Back
          </button>
          
          {!isLastQuestion && (
            <button
              onClick={handleNext}
              className="px-8 py-2.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-sm transition-colors"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
