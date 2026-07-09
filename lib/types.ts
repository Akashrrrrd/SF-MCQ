export interface ExamQuestion {
  id: string
  text: string
  topic: 'Advanced Apex Architecture & Transaction Controls' | 'Salesforce Data Cloud' | 'Lightning Web Components' | 'LWC Performance & Deep DOM Handling' | 'Data Cloud Harmonization & Identity Engineering' | 'Salesforce Fundamentals' | 'Salesforce Automation' | 'Apex Development' | 'Data Modeling' | 'Process Automation' | 'Security and Access' | 'User Interface' | 'Reports and Dashboards' | 'Integration' | 'Apex Testing' | 'Org Development' | 'OmniStudio Development Tools' | 'Agentforce & AI' | 'Creating a Customer Community Site' | 'Prompt Engineering' | 'Experience Cloud Basics' | 'Security and Authentication' | 'Creating a Build Your Own LWR' | 'Creating a Partner Community Site'
  options: string[]
  correctAnswer: number
  difficulty: 'moderate' | 'hard'
  explanation?: string
}

export interface ExamSession {
  id: string
  startedAt: Date
  answers: Record<string, number | null>
  currentQuestionIndex: number
  flaggedQuestions: Set<string>
}

export interface ExamResult {
  sessionId: string
  totalQuestions: number
  correctAnswers: number
  score: number
  timeUsed: number
  topicBreakdown: Record<string, { correct: number; total: number }>
  answers: Array<{
    questionId: string
    selected: number | null
    correct: number
    isCorrect: boolean
    question: ExamQuestion
  }>
}
