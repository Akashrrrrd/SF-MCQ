'use client'

import { ExamProvider } from '@/lib/exam-context'
import { ExamPage } from '@/components/exam-page'

export default function Home() {
  return (
    <ExamProvider>
      <ExamPage />
    </ExamProvider>
  )
}
