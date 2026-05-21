import re

def fix_backticks():
    path = "/Users/kd5000/Documents/Aurum Education Portal/src/data/courseData.js"
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
        
    # We want to replace any triple backticks (```) that are NOT preceded by a backslash with escaped triple backticks (\`\`\`)
    # Use negative lookbehind to ensure we don't escape already escaped backticks
    fixed = re.sub(r'(?<!\\)```', r'```', content) # Wait, let's write it carefully.
    
    # Let's just find all instances of '```' and replace them with '\`\`\`'.
    # Since there are no backslashed backticks in the current file, this is safe and simple.
    fixed = content.replace("```", "\\`\\`\\`")
    
    with open(path, "w", encoding="utf-8") as f:
        f.write(fixed)
    print("Escaped all triple backticks in courseData.js successfully.")

if __name__ == "__main__":
    fix_backticks()
