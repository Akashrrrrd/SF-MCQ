'use client'

import { ExamResult } from '@/lib/types'
import { CheckCircle2, XCircle } from 'lucide-react'

interface ExamResultsProps {
  result: ExamResult
  onReset: () => void
}

export function ExamResults({ result, onReset }: ExamResultsProps) {
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${minutes}m ${secs}s`
  }

  const passingQuestions = 30 // 30 out of 50 to pass (60%)
  const isPassed = result.correctAnswers >= passingQuestions

  return (
    <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className={`flex justify-center ${isPassed ? 'text-green-600 dark:text-green-400' : 'text-amber-600 dark:text-amber-400'}`}>
            {isPassed ? (
              <CheckCircle2 className="w-16 h-16" />
            ) : (
              <XCircle className="w-16 h-16" />
            )}
          </div>
          <h1 className="text-4xl font-bold text-foreground">
            {isPassed ? 'Exam Passed!' : 'Exam Completed'}
          </h1>
          <p className="text-lg text-muted-foreground">
            {isPassed 
              ? `Congratulations! You have successfully passed the exam.`
              : 'Review your performance and try again to achieve a passing score.'}
          </p>
        </div>

        {/* Score Card - Clean Horizontal Layout */}
        <div className="bg-card border border-border rounded-lg p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
          {/* Main Score Display */}
          <div className="text-center space-y-2">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary">{result.score}%</div>
            <p className="text-xs sm:text-sm text-muted-foreground">Overall Score</p>
            <div className="flex justify-center pt-1 sm:pt-2">
              <div className="inline-block px-2 sm:px-3 py-1 rounded-md bg-primary/10 text-xs sm:text-sm font-medium text-primary">
                {result.correctAnswers} / {result.totalQuestions} Correct
              </div>
            </div>
          </div>

          {/* Horizontal Stats Row */}
          <div className="flex justify-center items-center gap-6 sm:gap-8 lg:gap-12">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-semibold text-foreground">{formatTime(result.timeUsed)}</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Time Used</div>
            </div>
            <div className="text-muted-foreground text-lg sm:text-xl">:</div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-semibold text-foreground">
                {result.answeredQuestions || result.answers.filter(a => a.selected !== null).length}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">Answered</div>
            </div>
            <div className="text-muted-foreground text-lg sm:text-xl">:</div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-semibold text-foreground">{passingQuestions}</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Required</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs sm:text-sm">
              <span className="font-medium">Score Progress</span>
              <span className="text-muted-foreground">{result.score}% {isPassed ? '(Passed)' : '(Failed)'}</span>
            </div>
            <div className="w-full h-2 sm:h-3 bg-muted rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  isPassed ? 'bg-green-500' : 'bg-amber-500'
                }`}
                style={{ width: `${result.score}%` }}
              />
            </div>
          </div>

          {/* Note about unanswered questions */}
          {(result.unansweredQuestions || result.answers.filter(a => a.selected === null).length) > 0 && (
            <div className="bg-muted/20 border border-border rounded-lg p-3 sm:p-4">
              <p className="text-xs sm:text-sm text-foreground">
                <span className="font-medium">Note:</span> Unanswered questions are counted as incorrect in your final score.
              </p>
            </div>
          )}
        </div>



        {/* Detailed Review Section - All Questions with Complete Details */}
        <div className="bg-card border border-border rounded-lg p-4 sm:p-6 space-y-4">
          <h2 className="text-base sm:text-lg font-semibold text-foreground">Question Review - All 50 Questions</h2>
          <div className="space-y-6">
            {result.answers.map((answer, index) => {
              const question = answer.question
              const isUnanswered = answer.selected === null
              return (
                <div key={answer.questionId} className="border-b border-border last:border-b-0 pb-6 last:pb-0">
                  {/* Question Number and Status */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <span className="font-semibold text-foreground text-sm">Q{index + 1}</span>
                    <div className={`px-3 py-1 rounded text-xs font-medium ${
                      answer.isCorrect 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                    }`}>
                      {answer.isCorrect ? '✓ Correct' : isUnanswered ? '✗ Unanswered' : '✗ Wrong'}
                    </div>
                  </div>

                  {/* Question Text */}
                  <div className="mb-4 pb-4 border-b border-border/30">
                    <p className="text-sm sm:text-base text-foreground leading-relaxed">
                      {question.text}
                    </p>
                  </div>

                  {/* All Options */}
                  <div className="mb-4 space-y-2">
                    <p className="text-xs font-medium text-muted-foreground mb-3">Options:</p>
                    {question.options.map((option, optIndex) => (
                      <div
                        key={optIndex}
                        className={`p-2 rounded text-xs sm:text-sm ${
                          optIndex === answer.selected
                            ? 'bg-red-100/50 dark:bg-red-900/20 border border-red-300 dark:border-red-700'
                            : optIndex === answer.correct
                            ? 'bg-green-100/50 dark:bg-green-900/20 border border-green-300 dark:border-green-700'
                            : 'bg-muted/20'
                        }`}
                      >
                        <span className="font-medium">{String.fromCharCode(65 + optIndex)})</span> {option}
                        {optIndex === answer.selected && answer.selected !== answer.correct && (
                          <span className="ml-2 text-red-600 dark:text-red-400 font-medium">(Your Answer)</span>
                        )}
                        {optIndex === answer.correct && (
                          <span className="ml-2 text-green-600 dark:text-green-400 font-medium">(Correct Answer)</span>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Your Answer Summary */}
                  <div className="mb-4 p-3 bg-muted/20 rounded">
                    <p className="text-xs font-medium text-muted-foreground mb-2">Your Answer:</p>
                    <p className={`text-sm ${
                      answer.isCorrect 
                        ? 'text-green-600 dark:text-green-400' 
                        : isUnanswered
                        ? 'text-red-600 dark:text-red-400 font-medium'
                        : 'text-red-600 dark:text-red-400'
                    }`}>
                      {answer.selected !== null 
                        ? `${String.fromCharCode(65 + answer.selected)}) ${question.options[answer.selected]}`
                        : '(Not Answered - Counted as Wrong)'
                      }
                    </p>
                  </div>

                  {/* Correct Answer (always show for wrong/unanswered) */}
                  {!answer.isCorrect && (
                    <div className="mb-4 p-3 bg-green-100/20 dark:bg-green-900/20 rounded border border-green-300/30 dark:border-green-700/30">
                      <p className="text-xs font-medium text-muted-foreground mb-2">Correct Answer:</p>
                      <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                        {String.fromCharCode(65 + answer.correct)}) {question.options[answer.correct]}
                      </p>
                    </div>
                  )}

                  {/* Explanation */}
                  {question.explanation && (
                    <div className="p-3 bg-muted/20 rounded">
                      <p className="text-xs font-medium text-muted-foreground mb-2">Explanation:</p>
                      <p className="text-xs sm:text-sm text-foreground leading-relaxed">
                        {question.explanation}
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-center">
          <button
            onClick={onReset}
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-medium transition-colors"
          >
            Start New Exam
          </button>
        </div>

        {/* Session ID */}
        <div className="text-center text-xs text-muted-foreground">
          Session ID: <code className="font-mono">{result.sessionId}</code>
        </div>
      </div>
    </div>
  )
}
