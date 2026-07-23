import re
import json

# Read the questions file
with open('lib/questions.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern to match question objects
question_pattern = r'\{\s*id:\s*(["\']dumps-\d+["\']),\s*text:\s*(["\'].*?["\'])\s*,\s*topic:\s*(["\'].*?["\'])\s*,\s*options:\s*\[(.*?)\],\s*correctAnswer:\s*([^,]+),\s*difficulty:\s*(["\'][^"\']*["\'])\s*,\s*explanation:\s*(["\'].*?["\'])'

# Find all multi-answer questions
matches = list(re.finditer(question_pattern, content, re.DOTALL))

multi_answer_info = []

for match in matches:
    question_id = match.group(1).strip("'\"")
    text = match.group(2).strip("'\"")
    explanation = match.group(7).strip("'\"")
    
    # Check if this is a multi-answer question
    if 'Choose 2 answers' in text or 'Choose 3 answers' in text:
        correct_count = 2 if 'Choose 2 answers' in text else 3
        multi_answer_info.append({
            'id': question_id,
            'text': text[:100] + '...',
            'explanation': explanation[:150] + '...',
            'correct_count': correct_count,
            'match_start': match.start(),
            'match_end': match.end(),
            'full_match': match.group(0)
        })

print(f"Found {len(multi_answer_info)} multi-answer questions")
print("\nFirst 10 multi-answer questions:")
for i, info in enumerate(multi_answer_info[:10]):
    print(f"{i+1}. {info['id']}: {info['text']}")
    print(f"   Needs {info['correct_count']} answers")
    print(f"   Explanation: {info['explanation']}\n")

# Save info for manual review
with open('multi_answer_questions.json', 'w') as f:
    json.dump(multi_answer_info, f, indent=2)

print(f"\nTotal: {len(multi_answer_info)} questions need conversion")
print("Saved question details to multi_answer_questions.json")
