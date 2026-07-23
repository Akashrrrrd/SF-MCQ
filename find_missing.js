const fs = require('fs');
const path = require('path');

// Read the questions file
const filePath = path.join(__dirname, 'lib', 'questions.ts');
const content = fs.readFileSync(filePath, 'utf-8');

// Split into questions
const lines = content.split('\n');

let currentQuestion = null;
let inOptions = false;
let missingMultiAnswers = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Check for id
  const idMatch = line.match(/id:\s*'(dumps-\d+)'/);
  if (idMatch) {
    currentQuestion = { id: idMatch[1], hasChoose: false, correctAnswer: null, lineNum: i + 1 };
  }
  
  // Check for "Choose 2/3 answers"
  if (currentQuestion && (line.includes('Choose 2 answers') || line.includes('Choose 3 answers'))) {
    currentQuestion.hasChoose = true;
    currentQuestion.chooseText = line.substring(0, 100);
  }
  
  // Check for correctAnswer
  if (currentQuestion && line.includes('correctAnswer:')) {
    const answerMatch = line.match(/correctAnswer:\s*(\[.*?\]|[0-9]+)/);
    if (answerMatch) {
      currentQuestion.correctAnswer = answerMatch[1];
      
      // If has "Choose" but correctAnswer is NOT an array, it's missing
      if (currentQuestion.hasChoose && !answerMatch[1].startsWith('[')) {
        missingMultiAnswers.push(currentQuestion);
      }
    }
  }
}

console.log(`Found ${missingMultiAnswers.length} questions with "Choose X answers" but single-value correctAnswer:\n`);
missingMultiAnswers.forEach((q, idx) => {
  console.log(`${idx + 1}. ${q.id} (line ${q.lineNum}): correctAnswer: ${q.correctAnswer}`);
});

if (missingMultiAnswers.length === 0) {
  console.log('✓ All multi-answer questions are properly configured!');
}
