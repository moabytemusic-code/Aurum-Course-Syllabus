import os
import pypdfium2 as pdfium

def extract_pages():
    pdf_dir = "/Users/kd5000/Documents/Aurum Education Portal/public"
    output_dir = "/Users/kd5000/Documents/Aurum Education Portal/public/images"
    os.makedirs(output_dir, exist_ok=True)
    
    extractions = [
        # (PDF filename, 0-indexed page number, output filename)
        ("english_Aurum_Token.pdf", 2, "token_utility.png"),
        ("english_Aurum_Token.pdf", 3, "token_distribution.png"),
        ("english_Aurum_Token.pdf", 4, "token_growth_model.png"),
        ("english_Aurum_Token.pdf", 12, "license_packages.png"),
        ("english_Aurum_Token.pdf", 16, "staking_options.png"),
        ("english_Aurum_Token.pdf", 17, "staking_earnings.png"),
        
        ("English.AURUM Partner Program_copy.pdf", 2, "partner_income_types.png"),
        ("English.AURUM Partner Program_copy.pdf", 8, "partner_product_benefits.png"),
        ("English.AURUM Partner Program_copy.pdf", 10, "partner_profitshare_table.png"),
        ("English.AURUM Partner Program_copy.pdf", 12, "partner_shareholder_bonus.png"),
        
        ("English. Guide to Using the Aurum Platform .pdf", 6, "backoffice_dashboard.png"),
        ("English. Guide to Using the Aurum Platform .pdf", 16, "backoffice_bot_packages.png"),
    ]
    
    print("Starting PDF Page Extraction...")
    for pdf_name, page_idx, out_name in extractions:
        pdf_path = os.path.join(pdf_dir, pdf_name)
        out_path = os.path.join(output_dir, out_name)
        
        if not os.path.exists(pdf_path):
            print(f"Error: {pdf_name} not found in public folder!")
            continue
            
        try:
            print(f"Extracting page {page_idx + 1} from {pdf_name} -> {out_name}...")
            doc = pdfium.PdfDocument(pdf_path)
            if page_idx >= len(doc):
                print(f"Error: Page index {page_idx} out of range for {pdf_name} (total pages: {len(doc)})")
                continue
                
            page = doc[page_idx]
            bitmap = page.render(scale=2)  # Scale=2 renders at double resolution for crisp text/charts
            pil_img = bitmap.to_pil()
            pil_img.save(out_path)
            print(f"Successfully saved {out_name}.")
        except Exception as e:
            print(f"Failed to extract {out_name} from {pdf_name}: {e}")
            
    print("PDF Page Extraction Complete.")

if __name__ == "__main__":
    extract_pages()
