import { ExamQuestion } from './lib/types'
import { 
  getQuestions, 
  getQuestionsByTopic as getTopicQuestions, 
  getUniqueExamSet,
  getExamStructureInfo,
  getAllAvailableExamSets,
  validateExamStructure,
  getTopicDistribution,
  generateQuestionDatabaseSummary
} from './lib/questions'

// Main exports - these functions work with 7 fixed exam sets
export function getAllQuestions(): ExamQuestion[] {
  return getQuestions()
}

export function getQuestionsByTopic(topic: string): ExamQuestion[] {
  return getTopicQuestions(topic)
}

// Get a specific exam set (1-7), each containing exactly 50 questions
// Each set is completely different with NO question repetition across sets
export function getExamSet(examSetNumber: number): ExamQuestion[] {
  return getUniqueExamSet(examSetNumber)
}

// Export utility functions for exam management
export { 
  getExamStructureInfo, 
  getAllAvailableExamSets, 
  validateExamStructure, 
  getTopicDistribution, 
  generateQuestionDatabaseSummary,
  getUniqueExamSet
}

// Utility function to get exam set info (backwards compatibility)
export function getExamSetInfo() {
  return getExamStructureInfo()
}

// Get all available exam sets
export function getAllExamSets(): ExamQuestion[][] {
  return getAllAvailableExamSets()
}