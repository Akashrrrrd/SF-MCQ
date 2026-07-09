import { ExamQuestion } from './lib/types'
import { 
  getQuestions, 
  getQuestionsByTopic as getTopicQuestions, 
  getUniqueExamSet, 
  getRandomExamQuestions, 
  getBalancedRandomQuestions as getBalancedQuestions,
  getExamStructureInfo,
  getAllAvailableExamSets,
  validateExamStructure,
  getTopicDistribution,
  generateQuestionDatabaseSummary
} from './lib/questions'

// Main exports - these functions will work with 350 questions across 7 exam sets
export function getAllQuestions(): ExamQuestion[] {
  return getQuestions()
}

export function getQuestionsByTopic(topic: string): ExamQuestion[] {
  return getTopicQuestions(topic)
}

// Get a specific exam set (1-7), each containing 50 questions
export function getExamSet(examSetNumber: number): ExamQuestion[] {
  return getUniqueExamSet(examSetNumber)
}

// Get random questions from any of the 7 exam sets
export function getRandomQuestions(count: number = 50): ExamQuestion[] {
  return getRandomExamQuestions(count)
}

// Get balanced questions across all topics
export function getBalancedRandomQuestions(count: number): ExamQuestion[] {
  return getBalancedQuestions(count)
}

// Export utility functions for exam management
export { 
  getExamStructureInfo, 
  getAllAvailableExamSets, 
  validateExamStructure, 
  getTopicDistribution, 
  generateQuestionDatabaseSummary 
}

// Utility function to get exam set info (backwards compatibility)
export function getExamSetInfo() {
  return getExamStructureInfo()
}

// Get all available exam sets
export function getAllExamSets(): ExamQuestion[][] {
  return getAllAvailableExamSets()
}