import fitz  # PyMuPDF
import os

pdfs = [
    {
        "path": r"C:\Users\SHIVANGI\Desktop\shivangi-portfolio\Coursera bit bytes.pdf",
        "output": r"C:\Users\SHIVANGI\Desktop\shivangi-portfolio\assets\certificates\coursera-bit-bytes.png"
    },
    {
        "path": r"C:\Users\SHIVANGI\Desktop\certificates\Coursera tcp ip.pdf",
        "output": r"C:\Users\SHIVANGI\Desktop\shivangi-portfolio\assets\certificates\coursera-tcp-ip.png"
    },
    {
        "path": r"C:\Users\SHIVANGI\Downloads\https___s3.amazonaws.com_exams-media_2027_StudentS certificate for CSE205_12310405@neocolab.ai (6).pdf",
        "output": r"C:\Users\SHIVANGI\Desktop\shivangi-portfolio\assets\certificates\dsa-certificate.png"
    }
]

os.makedirs(r"C:\Users\SHIVANGI\Desktop\shivangi-portfolio\assets\certificates", exist_ok=True)

for item in pdfs:
    pdf_path = item["path"]
    out_path = item["output"]
    if os.path.exists(pdf_path):
        doc = fitz.open(pdf_path)
        page = doc.load_page(0)  # first page
        pix = page.get_pixmap(dpi=150)
        pix.save(out_path)
        print(f"Saved {out_path}")
    else:
        print(f"File not found: {pdf_path}")
