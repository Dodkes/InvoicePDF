import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
// import 'pdfmake/build/vfs_fonts';


export default function PdfComponent() {
    const generatePDF = () => {
        const docDefinition = {
            content: [
                {
                    text: 'Your new invoice !',
                    style: 'header'
                },
                'Example'
            ],
            styles: {
                header: {
                    fontsize: 18,
                    bold: true,
                    margin: [0, 0, 0, 10]
                }
            }
        }
        // pdfMake.createPdf(docDefinition).download('Invoice number: 2024001'); 
        // pdfMake.createPdf(docDefinition).print();
        pdfMake.createPdf(docDefinition).open();



    }


  return (
    <div>PdfComponent
              <button onClick={generatePDF}>Generate PDF</button>

    </div>
  )
}
