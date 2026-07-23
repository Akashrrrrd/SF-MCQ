const fs = require('fs');
const path = require('path');

// Read the file
const filePath = path.join(__dirname, 'lib', 'questions.ts');
const content = fs.readFileSync(filePath, 'utf-8');

// Find all "Choose 2" and "Choose 3" questions
const choosePattern = /Choose [23] answers/g;
const matches = [...content.matchAll(choosePattern)];

console.log(`Found ${matches.length} questions with "Choose 2/3 answers"`);

// Now let's analyze the questions and their explanations
// We need to extract each question object and determine the correct answers

const questionPattern = /\{\s*id:\s*'([^']+)'[\s\S]*?text:\s*'([^']*?Choose [23][^']*?)'[\s\S]*?options:\s*\[([\s\S]*?)\][\s\S]*?correctAnswer:\s*(\d+)[\s\S]*?explanation:\s*'([^']+)'/g;

let match;
let count = 0;
const conversions = [];

while ((match = questionPattern.exec(content)) !== null) {
    count++;
    const id = match[1];
    const text = match[2];
    const optionsStr = match[3];
    const currentAnswer = parseInt(match[4]);
    const explanation = match[5];
    
    // Parse options
    const optionsMatches = [...optionsStr.matchAll(/'([^']+)'/g)];
    const options = optionsMatches.map(m => m[1]);
    
    conversions.push({
        index: count,
        id: id,
        text: text.substring(0, 80),
        currentAnswer: currentAnswer,
        currentOption: options[currentAnswer],
        explanation: explanation.substring(0, 150),
        options: options
    });
}

console.log(`\n✓ Successfully extracted ${count} "Choose 2/3" questions\n`);

// Show first 10 conversions
console.log('First 10 questions found:');
console.log('='.repeat(100));

conversions.slice(0, 10).forEach(q => {
    console.log(`\nID: ${q.id}`);
    console.log(`Text: ${q.text}...`);
    console.log(`Current Answer Index: ${q.currentAnswer} ("${q.currentOption}")`);
    console.log(`Explanation: ${q.explanation}...`);
});

// Save to output file
const output = JSON.stringify(conversions, null, 2);
fs.writeFileSync(path.join(__dirname, 'choose_questions.json'), output);
console.log(`\n\n✓ Saved all ${conversions.length} questions to choose_questions.json`);
