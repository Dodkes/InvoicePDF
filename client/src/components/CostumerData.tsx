import { Field, Form, Formik } from "formik";
import { Customer } from "../types";

export default function CostumerData() {
  const customer: Customer = {
    name: "Company, s. r. o.",
    street: "Jarná 48",
    city: "Bratislava",
    ZIP: 81109,
    country: "Slovensko",
    ICO: 49081240,
    DIC: 4564367832,
  };

  return (
    <div>
      <Formik
        initialValues={customer}
        // initialValues={props.signedUser}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
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
