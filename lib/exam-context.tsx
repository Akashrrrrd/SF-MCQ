'use client'

import { createContext, useContext, useReducer, useCallback, ReactNode } from 'react'
import { ExamQuestion, ExamSession, ExamResult } from './types'
import { getUniqueExamSet } from './questions'

interface ExamContextType {
  questions: ExamQuestion[]
  session: ExamSession | null
  result: ExamResult | null
  selectedSet: number | null
  setSelectedSet: (setNumber: number) => void
  startExam: () => void
  selectAnswer: (questionId: string, answerIndex: number) => void
  toggleFlag: (questionId: string) => void
  goToQuestion: (index: number) => void
  submitExam: () => void
  resetExam: () => void
}

const ExamContext = createContext<ExamContextType | undefined>(undefined)

interface ExamState {
  questions: ExamQuestion[]
  session: ExamSession | null
  result: ExamResult | null
  selectedSet: number | null
}

type ExamAction =
  | { type: 'START_EXAM'; questions: ExamQuestion[] }
  | { type: 'SELECT_ANSWER'; questionId: string; answerIndex: number }
  | { type: 'TOGGLE_FLAG'; questionId: string }
  | { type: 'GO_TO_QUESTION'; index: number }
  | { type: 'SUBMIT_EXAM'; result: ExamResult }
  | { type: 'RESET_EXAM' }
  | { type: 'SET_SELECTED_SET'; setNumber: number }

function examReducer(state: ExamState, action: ExamAction): ExamState {
  switch (action.type) {
    case 'START_EXAM': {
      const sessionId = Date.now().toString()
      return {
        ...state,
        questions: action.questions,
        session: {
          id: sessionId,
          startedAt: new Date(),
          answers: {},
          currentQuestionIndex: 0,
          flaggedQuestions: new Set(),
        },
        result: null,
      }
    }
    case 'SELECT_ANSWER': {
      if (!state.session) return state
      return {
        ...state,
        session: {
          ...state.session,
          answers: {
            ...state.session.answers,
            [action.questionId]: action.answerIndex,
          },
        },
      }
    }
    case 'TOGGLE_FLAG': {
      if (!state.session) return state
      const newFlagged = new Set(state.session.flaggedQuestions)
      if (newFlagged.has(action.questionId)) {
        newFlagged.delete(action.questionId)
      } else {
        newFlagged.add(action.questionId)
      }
      return {
        ...state,
        session: {
          ...state.session,
          flaggedQuestions: newFlagged,
        },
      }
    }
    case 'GO_TO_QUESTION': {
      if (!state.session) return state
      return {
        ...state,
        session: {
          ...state.session,
          currentQuestionIndex: action.index,
        },
      }
    }
    case 'SUBMIT_EXAM': {
      return {
        ...state,
        result: action.result,
        session: null,
      }
    }
    case 'RESET_EXAM': {
      return {
        questions: [],
        session: null,
        result: null,
        selectedSet: null,
      }
    }
    case 'SET_SELECTED_SET': {
      return {
        ...state,
        selectedSet: action.setNumber,
      }
    }
    default:
      return state
  }
}

export function ExamProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(examReducer, {
    questions: [],
    session: null,
    result: null,
    selectedSet: null,
  })

  const startExam = useCallback(() => {
    if (state.selectedSet === null) {
      console.warn('No set selected')
      return
    }
    const questions = getUniqueExamSet(state.selectedSet)
    dispatch({ type: 'START_EXAM', questions })
  }, [state.selectedSet])

  const selectAnswer = useCallback((questionId: string, answerIndex: number) => {
    dispatch({ type: 'SELECT_ANSWER', questionId, answerIndex })
  }, [])

  const toggleFlag = useCallback((questionId: string) => {
    dispatch({ type: 'TOGGLE_FLAG', questionId })
  }, [])

  const goToQuestion = useCallback((index: number) => {
    dispatch({ type: 'GO_TO_QUESTION', index })
  }, [])

  const submitExam = useCallback(() => {
    if (!state.session) return

    const answers = state.questions.map(question => {
      const selected = state.session!.answers[question.id] ?? null
      // Only correct if answered AND answer is correct (unanswered = wrong)
      const isCorrect = selected !== null && selected === question.correctAnswer
      return {
        questionId: question.id,
        selected,
        correct: question.correctAnswer,
        isCorrect,
        question
      }
    })

    const correctAnswers = answers.filter(a => a.isCorrect).length
    const answeredQuestions = answers.filter(a => a.selected !== null).length
    const unansweredQuestions = state.questions.length - answeredQuestions
    
    // Score calculation: only correct answers count, unanswered = wrong
    const score = Math.round((correctAnswers / state.questions.length) * 100)

    const topicBreakdown: Record<string, { correct: number; total: number }> = {
      'Advanced Apex Architecture & Transaction Controls': { correct: 0, total: 0 },
      'LWC Performance & Deep DOM Handling': { correct: 0, total: 0 },
      'Data Cloud Harmonization & Identity Engineering': { correct: 0, total: 0 },
      'Salesforce Fundamentals': { correct: 0, total: 0 },
      'Salesforce Automation': { correct: 0, total: 0 },
      'Apex Development': { correct: 0, total: 0 },
      'Data Modeling': { correct: 0, total: 0 },
      'Process Automation': { correct: 0, total: 0 },
      'Security and Access': { correct: 0, total: 0 },
      'User Interface': { correct: 0, total: 0 },
      'Reports and Dashboards': { correct: 0, total: 0 },
      'Integration': { correct: 0, total: 0 },
      'Apex Testing': { correct: 0, total: 0 },
      'Org Development': { correct: 0, total: 0 },
      'OmniStudio Development Tools': { correct: 0, total: 0 },
      'Agentforce & AI': { correct: 0, total: 0 },
      'Experience Cloud Digital Sites': { correct: 0, total: 0 },
    }

    state.questions.forEach((question, index) => {
      const breakdown = topicBreakdown[question.topic]
      if (breakdown) {
        breakdown.total += 1
        if (answers[index].isCorrect) {
          breakdown.correct += 1
        }
      }
    })

    const timeUsed = Math.floor(
      (Date.now() - state.session.startedAt.getTime()) / 1000
    )

    const result: ExamResult = {
      sessionId: state.session.id,
      totalQuestions: state.questions.length,
      correctAnswers,
      score,
      timeUsed,
      topicBreakdown,
      answers,
      // Additional stats for better tracking
      answeredQuestions,
      unansweredQuestions,
      wrongAnswers: state.questions.length - correctAnswers // includes both wrong answers and unanswered
    }

    dispatch({ type: 'SUBMIT_EXAM', result })
  }, [state])

  const resetExam = useCallback(() => {
    dispatch({ type: 'RESET_EXAM' })
  }, [])

  const setSelectedSet = useCallback((setNumber: number) => {
    dispatch({ type: 'SET_SELECTED_SET', setNumber })
  }, [])

  const value: ExamContextType = {
    questions: state.questions,
    session: state.session,
    result: state.result,
    selectedSet: state.selectedSet,
    setSelectedSet,
    startExam,
    selectAnswer,
    toggleFlag,
    goToQuestion,
    submitExam,
    resetExam,
  }

  return <ExamContext.Provider value={value}>{children}</ExamContext.Provider>
}

export function useExam() {
  const context = useContext(ExamContext)
  if (!context) {
    throw new Error('useExam must be used within ExamProvider')
  }
  return context
}
