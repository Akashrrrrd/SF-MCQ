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
    <div className="space-y-6 sm:space-y-8 lg:space-y-10">
      {/* Mobile-Optimized Question Header */}
      <div className="space-y-3 sm:space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-xs sm:text-sm font-semibold text-muted-foreground tracking-wide uppercase">
            Question {questionNumber} of {totalQuestions}
          </div>
          {/* Question Difficulty Badge */}
          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
            question.difficulty === 'hard' 
              ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' 
              : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
          }`}>
            {question.difficulty}
          </div>
        </div>
        
        {/* Topic Badge */}
        <div className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium">
          {question.topic}
        </div>
        
        {/* Question Text - Mobile Optimized */}
        <div className="bg-card border border-border rounded-lg p-4 sm:p-6">
          <p className="text-sm sm:text-base lg:text-lg text-foreground leading-relaxed font-normal">
            {question.text}
          </p>
        </div>
      </div>

      {/* Mobile-Friendly Answer Options */}
      <div className="space-y-2 sm:space-y-3">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index
          return (
            <button
              key={index}
              onClick={() => selectAnswer(question.id, index)}
              className={`w-full p-3 sm:p-4 lg:p-5 text-left rounded-lg transition-all duration-200 border-2 active:scale-[0.98] ${
                isSelected
                  ? 'border-primary bg-primary/5 shadow-sm'
                  : 'border-border bg-card hover:border-primary/40 hover:bg-primary/5'
              }`}
            >
              <div className="flex items-start gap-3 sm:gap-4">
                {/* Option Letter */}
                <div
                  className={`flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center font-semibold text-xs sm:text-sm transition-colors ${
                    isSelected
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {String.fromCharCode(65 + index)}
                </div>
                
                {/* Option Text */}
                <div className="flex-1 pt-0.5 min-w-0">
                  <span className="text-foreground text-xs sm:text-sm lg:text-base font-normal leading-relaxed block">
                    {option}
                  </span>
                </div>
                
                {/* Selection Indicator */}
                {isSelected && (
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-xs text-primary font-medium hidden sm:inline">
                      Selected
                    </span>
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                )}
              </div>
            </button>
          )
        })}
      </div>

      {/* Mobile Helper Text */}
      <div className="text-center text-xs sm:text-sm text-muted-foreground">
        Tap an option to select your answer
      </div>
    </div>
  )
}
