import os
import sys

try:
    import pypdf
    print("pypdf is installed")
except ImportError:
    print("pypdf is not installed, trying to install or use PyPDF2")
    try:
        import PyPDF2
        print("PyPDF2 is installed")
    except ImportError:
        print("Neither pypdf nor PyPDF2 is installed. Installing pypdf...")
        import subprocess
        subprocess.check_call([sys.executable, "-m", "pip", "install", "pypdf"])
        import pypdf

def extract_pdf_toc_and_text(pdf_path):
    print(f"\n--- Extracting from: {os.path.basename(pdf_path)} ---")
    reader = pypdf.PdfReader(pdf_path)
    print(f"Total Pages: {len(reader.pages)}")
    
    # Print the outline if available
    try:
        outline = reader.outline
        if outline:
            print("Outline (Table of Contents):")
            for item in outline[:30]:  # Limit to 30 items
                if isinstance(item, list):
                    print("  Sub-items list")
                else:
                    print(f"  - {getattr(item, 'title', str(item))}")
        else:
            print("No outline found.")
    except Exception as e:
        print(f"Error reading outline: {e}")
        
    # Search for headings or products on the first few pages and look for product sections
    print("\nSample Page 1-10 headers/content:")
    for page_num in range(min(15, len(reader.pages))):
        text = reader.pages[page_num].extract_text()
        first_few_lines = "\n".join([line.strip() for line in text.split("\n")[:8] if line.strip()])
        print(f"--- Page {page_num + 1} ---")
        print(first_few_lines)

if __name__ == "__main__":
    pdf_dir = "/Users/kd5000/Documents/Aurum Education Portal/public"
    files = [
        "English. Guide to Using the Aurum Platform .pdf",
        "English. Aurum Guest Presentation.pdf",
        "English.AURUM Partner Program_copy.pdf",
        "english_Aurum_Token.pdf"
    ]
    for f in files:
        path = os.path.join(pdf_dir, f)
        if os.path.exists(path):
            extract_pdf_toc_and_text(path)
        else:
            print(f"File not found: {path}")
