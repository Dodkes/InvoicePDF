import { Field, Form, Formik } from "formik";
import { Costumer } from "../types";

export default function CostumerData(props: {
  costumerData: Costumer;
  signedUser: string;
  setCostumer: (arg: Costumer) => void;
}) {
  async function postData(values: Costumer) {
    const reqBody = { signedUser: props.signedUser, costumerData: values };

    const response = await fetch("/costumerData", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reqBody),
    });

    response.status === 200
      ? alert("Data saved")
      : alert("Failed to save data");
  }

  return (
    <div>
      <Formik
        initialValues={props.costumerData}
        onSubmit={(values, { setSubmitting }) => {
          postData(values);
          props.setCostumer(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <h3>Costumer data</h3>
            <div className="account-data-container">
              <div>
                <label htmlFor="name">Company</label>
                <br />
                <Field type="text" name="name" />
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
            </div>
            <button type="submit" disabled={isSubmitting}>
              Save
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
