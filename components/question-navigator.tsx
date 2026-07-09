'use client'

import { useExam } from '@/lib/exam-context'
import { ChevronLeft, ChevronRight, Flag } from 'lucide-react'

interface QuestionNavigatorProps {
  currentQuestionIndex: number
  totalQuestions: number
}

export function QuestionNavigator({
  currentQuestionIndex,
  totalQuestions,
}: QuestionNavigatorProps) {
  const { goToQuestion, session, questions } = useExam()

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      goToQuestion(currentQuestionIndex - 1)
    }
  }

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      goToQuestion(currentQuestionIndex + 1)
    }
  }

  return (
    <div className="space-y-4">
      {/* Question Grid */}
      <div className="bg-card rounded-lg border border-border p-4 space-y-3">
        <div className="text-sm font-semibold text-foreground">Jump to Question</div>
        <div className="grid grid-cols-6 gap-2 max-h-64 overflow-y-auto">
          {Array.from({ length: totalQuestions }).map((_, index) => {
            const questionId = questions[index]?.id
            const isAnswered = questionId ? (session?.answers[questionId] !== undefined && session?.answers[questionId] !== null) : false
            const isFlagged = questionId ? session?.flaggedQuestions.has(questionId) : false
            const isCurrent = index === currentQuestionIndex

            return (
              <button
                key={index}
                onClick={() => goToQuestion(index)}
                className={`w-full aspect-square rounded-md flex items-center justify-center font-semibold text-sm transition-all border ${
                  isCurrent
                    ? 'border-primary bg-primary text-primary-foreground'
                    : isAnswered
                    ? 'border-primary/50 bg-primary/20 text-foreground'
                    : 'border-muted bg-muted hover:border-muted-foreground'
                }`}
                title={`Question ${index + 1}${isFlagged ? ' (flagged)' : ''}`}
              >
                {isFlagged ? (
                  <Flag className="w-3 h-3 fill-current" />
                ) : (
                  index + 1
                )}
              </button>
            )
          })}
        </div>

        {/* Legend */}
        <div className="grid grid-cols-2 gap-2 pt-3 border-t border-border text-xs">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-muted" />
            <span className="text-muted-foreground">Unanswered</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-primary/20 border border-primary/50" />
            <span className="text-muted-foreground">Answered</span>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-2">
        <button
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          className="flex-1 px-4 py-2 flex items-center justify-center gap-2 rounded-lg bg-card border border-border hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Previous</span>
        </button>
        <button
          onClick={handleNext}
          disabled={currentQuestionIndex === totalQuestions - 1}
          className="flex-1 px-4 py-2 flex items-center justify-center gap-2 rounded-lg bg-card border border-border hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <span className="text-sm font-medium">Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
