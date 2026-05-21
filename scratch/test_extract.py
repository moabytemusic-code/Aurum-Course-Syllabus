import os
import pypdfium2 as pdfium

def test_extract():
    pdf_path = "/Users/kd5000/Documents/Aurum Education Portal/public/english_Aurum_Token.pdf"
    output_dir = "/Users/kd5000/Documents/Aurum Education Portal/public/images"
    os.makedirs(output_dir, exist_ok=True)
    
    print(f"Opening PDF: {pdf_path}")
    doc = pdfium.PdfDocument(pdf_path)
    print(f"Total pages: {len(doc)}")
    
    # Try to render page 4 (the pie chart page, index 3)
    page_index = 3
    page = doc[page_index]
    bitmap = page.render(scale=2)  # High resolution render
    pil_img = bitmap.to_pil()
    output_path = os.path.join(output_dir, "token_distribution_test.png")
    pil_img.save(output_path)
    print(f"Saved page {page_index+1} to {output_path}")

if __name__ == "__main__":
    test_extract()
