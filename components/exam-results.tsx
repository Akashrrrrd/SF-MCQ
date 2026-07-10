'use client'

import { ExamResult } from '@/lib/types'
import { CheckCircle2, XCircle, BarChart3, Clock } from 'lucide-react'

interface ExamResultsProps {
  result: ExamResult
  onReset: () => void
}

export function ExamResults({ result, onReset }: ExamResultsProps) {
  const passingScore = 30; // Need 30 out of 50 to pass
  const totalQuestions = 50;
  
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

        {/* Topic Breakdown */}
        <div className="bg-card border border-border rounded-lg p-6 space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Topic Performance</h2>
          <div className="space-y-4">
            {Object.entries(result.topicBreakdown)
              .filter(([topic, stats]) => stats.total > 0) // Only show topics with questions
              .map(([topic, stats]) => {
              const percentage = Math.round((stats.correct / stats.total) * 100)
              return (
                <div key={topic} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-foreground">{topic}</span>
                    <span className="text-sm text-muted-foreground">
                      {stats.correct}/{stats.total}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${
                        percentage >= 70 ? 'bg-green-500' : 'bg-amber-500'
                      }`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <div className="text-xs text-muted-foreground text-right">{percentage}%</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Detailed Review Section */}
        <div className="bg-card border border-border rounded-lg p-4 sm:p-6 space-y-4">
          <h2 className="text-base sm:text-lg font-semibold text-foreground">Question Review</h2>
          <div className="space-y-4 sm:space-y-6">
            {result.answers.map((answer, index) => {
              const question = answer.question
              return (
                <div key={answer.questionId} className="border-b border-border last:border-b-0 pb-4 last:pb-0">
                  <div className="space-y-3">
                    {/* Question Header */}
                    <div className="space-y-2 sm:space-y-0 sm:flex sm:items-start sm:justify-between sm:gap-4">
                      <h3 className="font-medium text-foreground text-sm sm:text-base leading-relaxed">
                        Question {index + 1}: {question.text}
                      </h3>
                      <div className={`flex-shrink-0 px-2 py-1 rounded text-xs font-medium w-fit ${
                        answer.isCorrect 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                          : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                      }`}>
                        {answer.isCorrect ? 'Correct' : 'Incorrect'}
                      </div>
                    </div>
                    
                    {/* Answer Details */}
                    <div className="space-y-2 text-xs sm:text-sm">
                      <div className="bg-muted/30 rounded-md p-2 sm:p-3">
                        <span className="font-medium text-muted-foreground block sm:inline">Your Answer: </span>
                        <span className={`block sm:inline mt-1 sm:mt-0 ${answer.isCorrect ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                          {answer.selected !== null 
                            ? `${String.fromCharCode(65 + answer.selected)}) ${question.options[answer.selected]}`
                            : 'No answer selected'
                          }
                        </span>
                      </div>
                      {!answer.isCorrect && (
                        <div className="bg-muted/30 rounded-md p-2 sm:p-3">
                          <span className="font-medium text-muted-foreground block sm:inline">Correct Answer: </span>
                          <span className="text-green-600 dark:text-green-400 block sm:inline mt-1 sm:mt-0">
                            {String.fromCharCode(65 + answer.correct)}) {question.options[answer.correct]}
                          </span>
                        </div>
                      )}
                    </div>
                    
                    {/* Explanation */}
                    {question.explanation && (
                      <div className="bg-muted/30 border border-muted rounded-md p-3 mt-2">
                        <p className="text-xs sm:text-sm text-foreground leading-relaxed">
                          <span className="font-medium text-muted-foreground">Explanation: </span>
                          {question.explanation}
                        </p>
                      </div>
                    )}
                  </div>
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
