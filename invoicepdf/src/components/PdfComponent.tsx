/* eslint-disable no-octal */
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export default function PdfComponent() {

interface Customer {
    name: string,
    street: string,
    city: string,
    ZIP: number,
    country: string,
    ICO: number,
    DIC: number
}
interface Provider extends Customer {
    invoiceNumber: number,
    registered: string
}

const provider: Provider = {
    invoiceNumber: 2024001,
    name: 'Mgr. Jozef Žitt',
    street: 'Jána Hollého 1056/5',
    city: 'Michalovce',
    ZIP: 71001,
    country: 'Slovensko',
    ICO: 55902227,
    DIC: 1120397267,
    registered: 'Okresný úrad Michalovce, Číslo živnostenského registra: 840-31636'
}

const customer: Customer = {
    name: 'Company, s. r. o.',
    street: 'Jarná 48',
    city: 'Bratislava',
    ZIP: 81109,
    country: 'Slovensko',
    ICO: 49081240,
    DIC: 4564367832
}



    const generatePDF = () => {
        const docDefinition = {
            content: [
                {
                    text: `Faktúra číslo: ${provider.invoiceNumber}`,
                    style: 'h1'
                },
                {
                    alignment: 'justify',
                    columns: [
                        {
                            text: 'DODÁVATEĽ:',
                            style: 'h2'
                        },
                        {
                            text: 'ODBERATEĽ:',
                            style: 'h2'
                        },
                    ],
                },
                {
                    columns: [
                        {
                            text: `${provider.name}
                            ${provider.street}
                            ${provider.ZIP} ${provider.city}
                            ${provider.country}
                            
                            IČO: ${provider.ICO}
                            DIČ: ${provider.DIC}
                            ${provider.registered}`,
                        },
                        {
                            text: `${customer.name}
                            ${customer.street}
                            ${customer.ZIP} ${customer.city}
                            ${customer.country}

                            IČO: ${customer.ICO}
                            DIČ: ${customer.DIC}`
                        }, 
                    ]
                }
           

            ],
            styles: {
                h1: {
                    alignment: 'center',
                    bold: true,
                    margin: [0, 0, 0, 20],
                    fontSize: 15,
                },
                h2: {
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
    <div>
        <button onClick={generatePDF}>Generate PDF</button>
    </div>
  )
}
