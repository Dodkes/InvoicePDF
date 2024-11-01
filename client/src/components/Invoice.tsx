import { useState } from "react";

export default function Invoice() {
  const [invoiceNumber, setInvoiceNumber] = useState<number>(
    new Date().getFullYear() * 1000 + 1
  );
  const [issueDate, setIssueDate] = useState<string>("");
  const [deliveryDate, setDeliveryDate] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");

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
        <br />
      </div>
    </>
  );
}
