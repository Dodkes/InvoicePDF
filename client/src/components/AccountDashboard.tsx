import PdfComponent from "./PdfComponent";
import { Formik, Field, Form } from "formik";

export default function AccountDashboard(props: {
  signedUser: any;
  setIsLoggedIn: (arg: boolean) => void;
}) {
  function postData(values: any) {
    fetch("/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
  }

  return (
    <div>
      <h3>Account: {props.signedUser.name}</h3>
      <button onClick={() => props.setIsLoggedIn(false)}>Log out</button>

      <Formik
        initialValues={props.signedUser}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          postData(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <h3>Provider data</h3>
            <div className="account-data-container">
              <div>
                <label htmlFor="email">Email</label>
                <br />
                <Field type="email" name="email" />
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
              Submit
            </button>
          </Form>
        )}
      </Formik>
      <PdfComponent />
    </div>
  );
}