import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { Costumer } from "../types";
import { Provider } from "../types";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const items = [
  ["Value 1", "Value 2", "Value 3", "Value 4", "Value 5"],
  ["Value 1", "Value 2", "Value 3", "Value 4", "Value 5"],
  ["Value 1", "Value 2", "Value 3", "Value 4", "Value 5"],
  ["Value 1", "Value 2", "Value 3", "Value 4", "Value 5"],
];

export default function PdfComponent({
  provider,
  costumer,
  invoiceNumber,
  issueDate,
  deliveryDate,
  dueDate,
}: {
  provider: Provider;
  costumer: Costumer;
  invoiceNumber: number;
  issueDate: string;
  deliveryDate: string;
  dueDate: string;
}) {
  const generatePDF = () => {
    const docDefinition = {
      content: [
        {
          text: `Faktúra ${invoiceNumber}`,
          style: "h1",
        },
        {
          alignment: "justify",
          columns: [
            {
              text: "DODÁVATEĽ:",
              style: "h2",
            },
            {
              text: "ODBERATEĽ:",
              style: "h2",
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
              text: `${costumer.name}
                            ${costumer.street}
                            ${costumer.ZIP} ${costumer.city}
                            ${costumer.country}

                            IČO: ${costumer.ICO}
                            DIČ: ${costumer.DIC}`,
            },
          ],
        },
        {
          text: `Dátum vystavenia: ${issueDate}
                    Dátum dodania: ${deliveryDate}
                    Dátum splatnosti ${dueDate}
                    `,
          style: "move",
        },
        {
          layout: "lightHorizontalLines",
          style: "table",
          table: {
            headerRows: 1,
            widths: ["*", "auto", 100, "*", "*"],
            body: [
              [
                "Názov položky",
                "Počet",
                "Jednotka",
                "Jednotková cena",
                "Celkom",
              ],
              ...items,
            ],
          },
        },
        {
          text: `Celková suma: ${500 + 200} €`,
          style: "price",
        },
        {
          style: "move",
          table: {
            headerRows: 1,
            widths: ["auto", "auto", "auto", "auto"],

            body: [
              [
                "IBAN",
                "Variabilný symbol",
                "Dátum splatnosti",
                "Suma na úhradu",
              ],
              [provider.IBAN, invoiceNumber, dueDate, "700 €"],
            ],
          },
        },
      ],
      defaultStyle: {
        fontSize: 10,
      },
      styles: {
        h1: {
          alignment: "center",
          bold: true,
          margin: [0, 0, 0, 20],
          fontSize: 15,
        },
        h2: {
          bold: true,
          margin: [0, 0, 0, 10],
        },
        table: {
          bold: true,
        },
        move: {
          margin: [0, 50, 0, 0],
        },
        price: {
          bold: true,
          alignment: "right",
          fontSize: 12,
          margin: [0, 30, 0, 0],
        },
      },
    };

    // pdfMake.createPdf(docDefinition).download('Invoice number: 2024001');
    // pdfMake.createPdf(docDefinition).print();
    pdfMake.createPdf(docDefinition).open();
  };

  return (
    <div>
      <button onClick={generatePDF}>Generate PDF</button>
    </div>
  );
}
