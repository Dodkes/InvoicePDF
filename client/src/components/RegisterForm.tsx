import { Formik, Field, ErrorMessage, Form } from "formik";

export default function RegisterForm() {
  return (
    <div>
      <h1>Register account</h1>
      <Formik
        initialValues={{ registerEmail: "" }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="registerEmail">Email</label>
              <br />
              <Field
                type="email"
                name="registerEmail"
                placeholder="Your email"
              />
              <ErrorMessage name="registerEmail" component="div" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <br />
              <Field
                type="password"
                name="password"
                placeholder="Your password"
              />
              <ErrorMessage name="password" component="div" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <br />
              <Field
                type="password"
                name="passwordConfirm"
                placeholder="Your password"
              />
              <ErrorMessage name="password" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
