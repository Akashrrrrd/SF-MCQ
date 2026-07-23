const fs = require('fs');
const path = require('path');

// Read the questions file
const filePath = path.join(__dirname, 'lib', 'questions.ts');
const content = fs.readFileSync(filePath, 'utf-8');

// Split by question objects
const lines = content.split('\n');

const multiAnswerQuestions = [];

let i = 0;
while (i < lines.length) {
  if (lines[i].includes('Choose 2 answers') || lines[i].includes('Choose 3 answers')) {
    // Found a multi-answer question
    let questionStart = i;
    
    // Search backwards to find the id
    let id = '';
    for (let j = i; j >= Math.max(0, i - 20); j--) {
      const idMatch = lines[j].match(/id:\s*'(dumps-\d+)'/);
      if (idMatch) {
        id = idMatch[1];
        break;
      }
    }
    
    // Extract the "Choose X answers" pattern
    const chooseMatch = lines[i].match(/Choose (\d+) answers/);
    const correctCount = chooseMatch ? parseInt(chooseMatch[1]) : 2;
    
    // Search forward to find explanation
    let explanation = '';
    for (let j = i; j < Math.min(lines.length, i + 15); j++) {
      const explMatch = lines[j].match(/explanation:\s*'([^']+)'/);
      if (explMatch) {
        explanation = explMatch[1];
        break;
      }
    }
    
    multiAnswerQuestions.push({
      id,
      text: lines[i].substring(0, 80) + '...',
      correctCount,
      explanation: explanation.substring(0, 120) + '...',
      line: i + 1
    });
  }
  i++;
}

console.log(`Found ${multiAnswerQuestions.length} multi-answer questions\n`);
console.log('First 15 questions:');
multiAnswerQuestions.slice(0, 15).forEach((q, idx) => {
  console.log(`${idx + 1}. ${q.id} (line ${q.line}): needs ${q.correctCount} answers`);
  console.log(`   ${q.explanation}\n`);
});

fs.writeFileSync('multi_answer_list.json', JSON.stringify(multiAnswerQuestions, null, 2));
console.log(`\nTotal: ${multiAnswerQuestions.length} questions found`);
