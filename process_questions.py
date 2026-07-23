import re
import json

# Read the file
with open(r'c:\Users\aakas\Downloads\MCQ\lib\questions.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all questions with 'Choose 2' or 'Choose 3' answers
# We'll process the file by splitting into individual questions
questions_pattern = r'\{\s*id:\s*[\'"]([^\'"]+)[\'"]'
matches = list(re.finditer(questions_pattern, content))

print(f"Total questions in file: {len(matches)}")

# Now find Choose 2/3 questions
choose_pattern = r"Choose [23] answers"
choose_lines = re.finditer(choose_pattern, content)

count = 0
for line_match in choose_lines:
    count += 1

print(f"Questions with 'Choose 2/3 answers': {count}")

# Extract details more systematically
# Find positions of Choose 2/3
choose_positions = []
for match in re.finditer(choose_pattern, content):
    choose_positions.append(match.start())

print(f"\nFound {len(choose_positions)} instances of 'Choose 2/3 answers'")
print("\nFirst 10 questions with Choose 2/3:")

for idx, pos in enumerate(choose_positions[:10]):
    # Find the id before this position
    id_search = re.search(r"id:\s*[\'"]([^\'"]+)['\"]", content[:pos][::-1])
    if id_search:
        q_id = id_search.group(1)[::-1] if id_search else "unknown"
    
    # Find correctAnswer after this position  
    answer_search = re.search(r"correctAnswer:\s*(\d+)", content[pos:pos+500])
    if answer_search:
        curr_answer = answer_search.group(1)
    
    # Find explanation
    expl_search = re.search(r"explanation:\s*['\"]([^'\"]+)['\"]", content[pos:pos+800])
    if expl_search:
        explanation = expl_search.group(1)[:100]
    
    print(f"{idx+1}. ID: {q_id} | Current Answer: {curr_answer} | Expl: {explanation}...")

