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
      <h3>Items</h3>
      <div className="items-container">
        <div>
          <label htmlFor="">Item name</label>
          <br />
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Count</label>
          <br />
          <input type="number" />
        </div>
        <div>
          <label htmlFor="">Unit</label>
          <br />
          <select name="unit" id="unit">
            <option value="pcs">pcs.</option>
            <option value="kg">h.</option>
            <option value="l">m.</option>
            <option value="m²">m²</option>
            <option value="l">kg.</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Unit price</label>
          <br />
          <input type="number" />
        </div>
        <div>
          <label htmlFor="">Total</label>
          <br />
          <input type="number" />
        </div>
      </div>
    </>
  );
}
