import os
import pypdf

def inspect_all_pages(pdf_path):
    print(f"\n==================================================")
    print(f"File: {os.path.basename(pdf_path)}")
    reader = pypdf.PdfReader(pdf_path)
    pages_with_text = 0
    text_sample = ""
    
    for i, page in enumerate(reader.pages):
        text = page.extract_text()
        if text and len(text.strip()) > 0:
            pages_with_text += 1
            if not text_sample:
                text_sample = f"Page {i+1} first 200 chars:\n{text[:200]}"
                
    print(f"Pages with extractable text: {pages_with_text} / {len(reader.pages)}")
    if text_sample:
        print(text_sample)
        
    # Search for occurrences of keywords
    keywords = ["Neyro", "EX-A1", "Zeus", "Card", "Exchange", "RWA", "Bryan", "Drei"]
    print("Keyword search:")
    for kw in keywords:
        found_pages = []
        for i, page in enumerate(reader.pages):
            text = page.extract_text()
            if text and kw.lower() in text.lower():
                found_pages.append(i + 1)
        if found_pages:
            print(f"  '{kw}': found on pages {found_pages}")
        else:
            print(f"  '{kw}': NOT found")

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
            inspect_all_pages(path)
