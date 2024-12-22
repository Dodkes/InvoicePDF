import { Provider, Costumer } from "../types";
import CostumerData from "./CostumerData";
import InvoiceData from "./InvoiceData";
import PdfComponent from "./PdfComponent";
import { Formik, Field, Form } from "formik";
import { useState } from "react";

export default function AccountDashboard(props: {
  providerData: Provider;
  costumerData: Costumer;
  signedUser: string;
  setIsLoggedIn: (arg: boolean) => void;
}) {
  const date = new Date();
  const isoDate = date.toISOString().substring(0, 10);

  const [invoiceNumber, setInvoiceNumber] = useState<number>(
    new Date().getFullYear() * 1000 + 1
  );

  const [provider, setProvider] = useState<Provider>(props.providerData);
  const [costumer, setCostumer] = useState<Costumer>(props.costumerData);
  const [issueDate, setIssueDate] = useState<string>(isoDate);
  const [deliveryDate, setDeliveryDate] = useState<string>(isoDate);
  const [dueDate, setDueDate] = useState<string>(isoDate);
  const [invoiceItems, setInvoiceItems] = useState<string[][]>([]);

  async function postData(values: Provider) {
    setProvider(values); //send to PDF component for rendering

    const response = await fetch("/providerData", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    response.status === 200
      ? alert("Data saved")
      : alert("Failed to save data");
  }

  return (
    <div>
      <h3>Account: {props.providerData.name}</h3>
      <button onClick={() => props.setIsLoggedIn(false)}>Log out</button>

      <Formik
        initialValues={props.providerData}
        onSubmit={(values, { setSubmitting }) => {
          postData(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <h3>Provider</h3>
            <div className="account-data-container">
              <div>
                <label htmlFor="email">Email</label>
                <br />
                <Field disabled type="email" name="email" />
              </div>

              <div>
                <label htmlFor="name">Invoice issuer</label>
                <br />
                <Field type="text" name="name" />
              </div>
              <div>
                <label htmlFor="organisation">Provider</label>
                <br />
                <Field type="text" name="organisation" />
              </div>
              <div>
                <label htmlFor="city">City</label>
                <br />
                <Field type="text" name="city" />
              </div>
              <div>
                <label htmlFor="street">Street</label>
                <br />
                <Field type="text" name="street" />
              </div>
              <div>
                <label htmlFor="ZIP">ZIP</label>
                <br />
                <Field type="number" name="ZIP" />
              </div>
              <div>
                <label htmlFor="country">Country</label>
                <br />
                <Field type="text" name="country" />
              </div>
              <div>
                <label htmlFor="ICO">Business ID</label>
                <br />
                <Field type="number" name="ICO" />
              </div>
              <div>
                <label htmlFor="DIC">Tax ID</label>
                <br />
                <Field type="number" name="DIC" />
              </div>
              <div>
                <label htmlFor="IBAN">IBAN</label>
                <br />
                <Field type="text" name="IBAN" />
              </div>
              <div>
                <label htmlFor="registered">Registered</label>
                <br />
                <Field type="text" name="registered" />
              </div>
            </div>

            <button type="submit" disabled={isSubmitting}>
              Save
            </button>
          </Form>
        )}
      </Formik>
      <CostumerData
        signedUser={props.signedUser}
        costumerData={props.costumerData}
        setCostumer={setCostumer}
      />
      <InvoiceData
        issueDate={issueDate}
        setIssueDate={setIssueDate}
        deliveryDate={deliveryDate}
        setDeliveryDate={setDeliveryDate}
        dueDate={dueDate}
        setDueDate={setDueDate}
        invoiceNumber={invoiceNumber}
        setInvoiceNumber={setInvoiceNumber}
        invoiceItems={invoiceItems}
        setInvoiceItems={setInvoiceItems}
      />
      <PdfComponent
        provider={provider}
        costumer={costumer}
        issueDate={issueDate}
        deliveryDate={deliveryDate}
        dueDate={dueDate}
        invoiceNumber={invoiceNumber}
        invoiceItems={invoiceItems}
      />
    </div>
  );
}
