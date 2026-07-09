# MCQ Exam System - 350 Questions Structure

## Overview
The MCQ exam system is designed to handle **350 questions** organized into **7 distinct exam sets** of **50 questions each**.

## Current Status
- **Current Questions**: 20 (6% complete)
- **Target Questions**: 350
- **Missing Questions**: 330
- **Available Complete Sets**: 0 of 7

## Question Organization Structure

### Array Structure in `lib/questions.ts`
```
QUESTIONS array indices:
┌─────────────┬─────────────────┬─────────────────┐
│ Exam Set    │ Array Indices   │ Question Range  │
├─────────────┼─────────────────┼─────────────────┤
│ SET 1       │ 0-49           │ Questions 1-50   │
│ SET 2       │ 50-99          │ Questions 51-100 │
│ SET 3       │ 100-149        │ Questions 101-150│
│ SET 4       │ 150-199        │ Questions 151-200│
│ SET 5       │ 200-249        │ Questions 201-250│
│ SET 6       │ 250-299        │ Questions 251-300│
│ SET 7       │ 300-349        │ Questions 301-350│
└─────────────┴─────────────────┴─────────────────┘
```

## Adding Your 350 Questions

### Step 1: Question ID Convention
Use this naming pattern for question IDs:
- **Set 1**: `set1-1`, `set1-2`, ..., `set1-50`
- **Set 2**: `set2-1`, `set2-2`, ..., `set2-50`
- **Set 3**: `set3-1`, `set3-2`, ..., `set3-50`
- And so on...

### Step 2: Question Format
Each question must follow the `ExamQuestion` interface:

```typescript
{
  id: string,           // e.g., "set1-1", "set2-15"
  text: string,         // The question text
  topic: string,        // One of the valid topics from types.ts
  options: string[],    // Array of 4 answer choices
  correctAnswer: number,// Index (0-3) of correct answer
  difficulty: 'moderate',
  explanation?: string  // Optional explanation
}
```

### Step 3: Valid Topics
Use these topic values (from `lib/types.ts`):
- `'Advanced Apex Architecture & Transaction Controls'`
- `'LWC Performance & Deep DOM Handling'`
- `'Data Cloud Harmonization & Identity Engineering'`
- `'Salesforce Fundamentals'`
- `'Salesforce Automation'`
- `'Data Modeling'`
- `'Process Automation'`
- `'Security and Access'`
- `'User Interface'`
- `'Reports and Dashboards'`
- `'Integration'`
- `'Apex Testing'`
- `'Org Development'`
- `'OmniStudio Development Tools'`
- `'Agentforce & AI'`
- `'Experience Cloud Digital Sites'`

## Available Functions

### Main Functions (`Main.ts`)
- `getAllQuestions()` - Get all questions
- `getExamSet(setNumber)` - Get specific exam set (1-7)
- `getRandomQuestions(count)` - Get random questions from any set
- `getBalancedRandomQuestions(count)` - Get balanced questions across topics

### Utility Functions
- `getExamStructureInfo()` - Get detailed structure information
- `validateExamStructure()` - Check if structure is complete
- `generateQuestionDatabaseSummary()` - Full database analysis
- `getTopicDistribution()` - Count questions per topic

## Testing Your Implementation

Run this command to test the structure:
```bash
npx tsx test-structure.ts
```

This will show:
- Current completion percentage
- Available complete exam sets
- Topic distribution
- Validation results

## Benefits of This Structure

1. **Consistent Exam Sets**: Each set has exactly 50 questions
2. **Predictable Access**: Set 1 = indices 0-49, Set 2 = indices 50-99, etc.
3. **Scalable**: Easy to add more sets in the future
4. **Flexible**: Can get random questions, specific sets, or balanced topic distribution
5. **Validated**: Built-in validation ensures data integrity

## Next Steps

1. Replace the current 20 questions in `lib/questions.ts` with your 350 questions
2. Follow the array index structure shown above
3. Use the suggested ID naming convention
4. Test with `npx tsx test-structure.ts`
5. Verify all 7 exam sets work correctly

Once complete, you'll have a robust MCQ system with 7 unique, balanced exam sets ready for use!