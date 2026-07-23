'use client'

import { CheckCircle2, Check } from 'lucide-react'
import { ExamQuestion } from '@/lib/types'
import { useExam } from '@/lib/exam-context'

interface QuestionDisplayProps {
  question: ExamQuestion
  questionNumber: number
  totalQuestions: number
  selectedAnswer: number | number[] | null
  onTimeUp?: () => void
}

export function QuestionDisplay({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
}: QuestionDisplayProps) {
  const { selectAnswer } = useExam()
  
  // Determine if this is a multi-answer question
  const isMultiAnswer = Array.isArray(question.correctAnswer)
  const selectedArray = Array.isArray(selectedAnswer) ? selectedAnswer : (selectedAnswer !== null ? [selectedAnswer] : [])
  const correctCount = Array.isArray(question.correctAnswer) ? question.correctAnswer.length : 1

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
        
        {isMultiAnswer && (
          <div className="text-xs sm:text-sm text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950 p-2 rounded">
            Select {correctCount} option(s)
          </div>
        )}
      </div>

      {/* Clean Answer Options */}
      <div>
        {question.options.map((option, index) => {
          const isSelected = isMultiAnswer 
            ? selectedArray.includes(index)
            : selectedAnswer === index
          
          if (isMultiAnswer) {
            // Multi-answer: Use checkbox style with better spacing
            return (
              <div key={index} className="mb-3">
                <label
                  className={`flex items-start gap-4 w-full p-4 sm:p-5 text-left rounded-lg transition-all duration-200 border-2 cursor-pointer ${
                    isSelected
                      ? 'border-primary bg-primary/8 shadow-sm'
                      : 'border-border/50 bg-card hover:border-primary/50 hover:bg-card/80'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => selectAnswer(question.id, index, true)}
                    className="w-5 h-5 sm:w-6 sm:h-6 mt-1 cursor-pointer accent-primary rounded flex-shrink-0"
                  />
                  
                  <div className="flex-1 min-w-0 pt-0.5">
                    <span className="text-foreground text-sm sm:text-base font-medium leading-relaxed block">
                      {option}
                    </span>
                    {isSelected && (
                      <span className="text-xs text-primary font-semibold mt-2 block">
                        ✓ Selected
                      </span>
                    )}
                  </div>
                </label>
              </div>
            )
          } else {
            // Single-answer: Use radio button style with better separation
            return (
              <button
                key={index}
                onClick={() => selectAnswer(question.id, index, false)}
                className={`w-full p-4 sm:p-5 text-left rounded-lg transition-all duration-200 border-2 mb-3 ${
                  isSelected
                    ? 'border-primary bg-primary/8 shadow-sm'
                    : 'border-border/50 bg-card hover:border-primary/50 hover:bg-card/80'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center font-semibold text-xs sm:text-sm transition-all ${
                      isSelected
                        ? 'bg-primary text-primary-foreground ring-2 ring-primary/30'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    {isSelected ? <Check className="w-4 h-4" /> : String.fromCharCode(65 + index)}
                  </div>
                  
                  <div className="flex-1 pt-1 min-w-0">
                    <span className="text-foreground text-sm sm:text-base font-medium leading-relaxed block">
                      {option}
                    </span>
                    {isSelected && (
                      <span className="text-xs text-primary font-semibold mt-2 block">
                        ✓ Your answer
                      </span>
                    )}
                  </div>
                  
                  {isSelected && (
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                  )}
                </div>
              </button>
            )
          }
        })}
      </div>
    </div>
  )
}
