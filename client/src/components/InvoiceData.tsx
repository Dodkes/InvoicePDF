import { InvoiceDataProps } from "../types";

export default function InvoiceData({
  issueDate,
  setIssueDate,
  deliveryDate,
  setDeliveryDate,
  dueDate,
  setDueDate,
  invoiceNumber,
  setInvoiceNumber,
}: InvoiceDataProps) {
  return (
    <>
      <h3>Invoice</h3>
      <div className="invoice-data-container">
        <div>
          <label htmlFor="">Invoice number</label>
          <br />
          <input
            type="number"
            value={invoiceNumber}
            onChange={(e) => setInvoiceNumber(parseInt(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="">Date of issue</label>
          <br />
          <input
            type="date"
            value={issueDate}
            onChange={(e) => setIssueDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Delivery date</label>
          <br />
          <input
            type="date"
            value={deliveryDate}
            onChange={(e) => setDeliveryDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Due date</label>
          <br />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}
