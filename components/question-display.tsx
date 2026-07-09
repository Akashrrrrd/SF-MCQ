'use client'

import { CheckCircle2 } from 'lucide-react'
import { ExamQuestion } from '@/lib/types'
import { useExam } from '@/lib/exam-context'

interface QuestionDisplayProps {
  question: ExamQuestion
  questionNumber: number
  totalQuestions: number
  selectedAnswer: number | null
  onTimeUp?: () => void
}

export function QuestionDisplay({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
}: QuestionDisplayProps) {
  const { selectAnswer, session, goToQuestion } = useExam()

  return (
    <div className="space-y-10">
      {/* Question Number and Title */}
      <div className="space-y-4">
        <div className="text-sm font-semibold text-muted-foreground tracking-wide uppercase letter-spacing-1">
          Question {questionNumber} of {totalQuestions}
        </div>
        <h2 className="text-3xl font-bold text-foreground leading-tight tracking-tight">
          Question {questionNumber}
        </h2>
        <p className="text-base text-foreground leading-relaxed mt-6 font-normal tracking-normal">
          {question.text}
        </p>
      </div>

      {/* Answer Options */}
      <div className="space-y-3">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index
          return (
            <button
              key={index}
              onClick={() => selectAnswer(question.id, index)}
              className={`w-full p-5 text-left rounded-md transition-all border-2 ${
                isSelected
                  ? 'border-accent bg-accent/5'
                  : 'border-muted bg-card hover:border-muted-foreground/40'
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex-shrink-0 w-7 h-7 rounded-sm flex items-center justify-center font-semibold text-sm transition-colors ${
                    isSelected
                      ? 'bg-accent text-background'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {String.fromCharCode(65 + index)}
                </div>
                <div className="flex-1 pt-0.5">
                  <span className="text-foreground text-sm font-normal tracking-normal">{option}</span>
                  {isSelected && (
                    <span className="text-xs text-accent font-medium ml-2">
                      Your answer
                    </span>
                  )}
                </div>
                {isSelected && (
                  <CheckCircle2 className="flex-shrink-0 w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                )}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
