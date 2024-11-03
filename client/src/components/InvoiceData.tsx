import { InvoiceDataProps } from "../types";
import { useRef } from "react";

export default function InvoiceData({
  issueDate,
  setIssueDate,
  deliveryDate,
  setDeliveryDate,
  dueDate,
  setDueDate,
  invoiceNumber,
  setInvoiceNumber,
  invoiceItems,
  setInvoiceItems,
}: InvoiceDataProps) {
  const itemNameRef = useRef<HTMLInputElement>(null);
  const countRef = useRef<HTMLInputElement>(null);
  const unitRef = useRef<HTMLSelectElement>(null);
  const unitPriceRef = useRef<HTMLInputElement>(null);
  const totalPriceRef = useRef<HTMLInputElement>(null);

  function Items() {
    const createItem = () => {
      const item = [
        itemNameRef.current?.value || "",
        countRef.current?.value || "",
        unitRef.current?.value || "",
        `${unitPriceRef.current?.value || "0"}`,
        `${totalPriceRef.current?.value || "0"}`,
      ];
      setInvoiceItems([...invoiceItems, item]);
    };

    const calculateTotalPrice = () => {
      const unitPrice = Number(unitPriceRef.current?.value);
      const count = Number(countRef.current?.value);
      totalPriceRef.current!.value = (unitPrice * count).toFixed(2);
    };

    return (
      <>
        <h3>Items</h3>
        <table className="item-table">
          <tbody>
            <tr>
              <th>Item name</th>
              <th>Quantity</th>
              <th>Unit</th>
              <th>Unit price €</th>
              <th>Total price €</th>
            </tr>
            {invoiceItems.map((item) => (
              <tr>
                {item.map((cell) => (
                  <td>{cell}</td>
                ))}
                <td>
                  <button>remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="items-container">
          <div>
            <label htmlFor="">Item name</label>
            <br />
            <input type="text" ref={itemNameRef} />
          </div>
          <div>
            <label htmlFor="">Quantity</label>
            <br />
            <input
              type="number"
              ref={countRef}
              onChange={calculateTotalPrice}
            />
          </div>
          <div>
            <label htmlFor="">Unit</label>
            <br />
            <select name="unit" id="unit" ref={unitRef}>
              <option value="pcs">pcs</option>
              <option value="h">h</option>
              <option value="m">m</option>
              <option value="m²">m²</option>
              <option value="kg">kg</option>
            </select>
          </div>
          <div>
            <label htmlFor="">Unit price €</label>
            <br />
            <input
              type="number"
              onChange={calculateTotalPrice}
              ref={unitPriceRef}
            />
          </div>
          <div>
            <label htmlFor="">Total price €</label>
            <br />
            <input type="number" ref={totalPriceRef} />
          </div>
          <button onClick={createItem}>Add</button>
        </div>
      </>
    );
  }

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
      <Items />
    </>
  );
}
