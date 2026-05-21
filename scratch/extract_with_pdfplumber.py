import os
import pdfplumber

def extract_with_pdfplumber(pdf_path):
    print(f"\n==================================================")
    print(f"File: {os.path.basename(pdf_path)}")
    
    with pdfplumber.open(pdf_path) as pdf:
        print(f"Total Pages: {len(pdf.pages)}")
        
        # Check text on pages
        pages_with_text = []
        for i, page in enumerate(pdf.pages):
            text = page.extract_text()
            if text and text.strip():
                pages_with_text.append(i + 1)
                
        print(f"Pages with extractable text: {len(pages_with_text)} / {len(pdf.pages)}")
        
        if pages_with_text:
            print(f"Extractable pages list: {pages_with_text}")
            # Print sample text of page 1 and page 2 or any other pages
            for p_num in pages_with_text[:15]:
                print(f"\n--- Page {p_num} ---")
                text = pdf.pages[p_num - 1].extract_text()
                print("\n".join(text.split("\n")[:15]))
        else:
            print("No text could be extracted from any page using pdfplumber.")

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
            extract_with_pdfplumber(path)
        else:
            print(f"File not found: {path}")
