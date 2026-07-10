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
  const { selectAnswer } = useExam()

  return (
    <div className="space-y-4 sm:space-y-5">
      {/* Professional Question Header */}
      <div className="space-y-2 sm:space-y-3">
        <div className="text-xs sm:text-sm font-semibold text-muted-foreground tracking-wide uppercase">
          Question {questionNumber} of {totalQuestions}
        </div>
        
        <h2 className="text-xl sm:text-2xl font-bold text-foreground leading-tight">
          Question {questionNumber}
        </h2>
        
        <p className="text-sm sm:text-base text-foreground leading-relaxed font-normal">
          {question.text}
        </p>
      </div>

      {/* Clean Answer Options */}
      <div className="space-y-2">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index
          return (
            <button
              key={index}
              onClick={() => selectAnswer(question.id, index)}
              className={`w-full p-3 sm:p-4 text-left rounded-lg transition-all duration-200 border-2 ${
                isSelected
                  ? 'border-primary bg-primary/5'
                  : 'border-border bg-card hover:border-primary/40'
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-sm flex items-center justify-center font-semibold text-xs sm:text-sm transition-colors ${
                    isSelected
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {String.fromCharCode(65 + index)}
                </div>
                
                <div className="flex-1 pt-0.5 min-w-0">
                  <span className="text-foreground text-xs sm:text-sm font-normal leading-relaxed block">
                    {option}
                  </span>
                  {isSelected && (
                    <span className="text-xs text-primary font-medium mt-1 block sm:inline sm:ml-2">
                      Your answer
                    </span>
                  )}
                </div>
                
                {isSelected && (
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                )}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
