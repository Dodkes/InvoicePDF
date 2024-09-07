import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { Customer } from "../types";
import { Provider } from "../types";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const provider: Provider = {
  invoiceNumber: 2024001,
  name: "Mgr. Jozef Žitt",
  street: "Jána Hollého 1056/5",
  city: "Michalovce",
  ZIP: 71001,
  country: "Slovensko",
  ICO: 55902227,
  DIC: 1120397267,
  registered:
    "Okresný úrad Michalovce, Číslo živnostenského registra: 840-31636",
  IBAN: "SK72 2222 0000 0029 6259 7873",
};

const customer: Customer = {
  name: "Company, s. r. o.",
  street: "Jarná 48",
  city: "Bratislava",
  ZIP: 81109,
  country: "Slovensko",
  ICO: 49081240,
  DIC: 4564367832,
};

const invoice = {
  issueDate: new Date().toLocaleDateString(),
  deliveryDate: new Date().toLocaleDateString(),
  dueDate: new Date().toLocaleDateString(),
};

const items = [
  ["Value 1", "Value 2", "Value 3", "Value 4", "Value 5"],
  ["Value 1", "Value 2", "Value 3", "Value 4", "Value 5"],
  ["Value 1", "Value 2", "Value 3", "Value 4", "Value 5"],
  ["Value 1", "Value 2", "Value 3", "Value 4", "Value 5"],
];

export default function PdfComponent(props: any) {
  const generatePDF = () => {
    const docDefinition = {
      content: [
        {
          text: `Faktúra ${provider.invoiceNumber}`,
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
              text: `${props.provider.name}
                            ${props.provider.street}
                            ${props.provider.ZIP} ${props.provider.city}
                            ${props.provider.country}
                            
                            IČO: ${props.provider.ICO}
                            DIČ: ${props.provider.DIC}
                            ${props.provider.registered}`,
            },
            {
              text: `${customer.name}
                            ${customer.street}
                            ${customer.ZIP} ${customer.city}
                            ${customer.country}

                            IČO: ${customer.ICO}
                            DIČ: ${customer.DIC}`,
            },
          ],
        },
        {
          text: `Dátum vystavenia: ${invoice.issueDate}
                    Dátum dodania: ${invoice.deliveryDate}
                    Dátum splatnosti ${invoice.dueDate}
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
              [
                props.provider.IBAN,
                provider.invoiceNumber,
                invoice.dueDate,
                "700 €",
              ],
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
