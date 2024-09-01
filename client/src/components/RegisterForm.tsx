import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";

const registerInitials = {
  email: "",
  password: "",
  confirmPassword: "",
};

export default function RegisterForm() {
  return (
    <div>
      <h1>Register account</h1>
      <Formik
        initialValues={registerInitials}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            .min(5, "Required at least 5 symbols")
            .required("Required"),
          confirmPassword: Yup.string()
            .required("Required")
            .oneOf([Yup.ref("password")], "Passwords must match"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="email">Email</label>
              <br />
              <Field type="email" name="email" placeholder="Your email" />
              <ErrorMessage name="email" component="div" />
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
              <label htmlFor="confirmPassword">Confirm Password</label>
              <br />
              <Field
                type="password"
                name="confirmPassword"
                placeholder="Your password"
              />
              <ErrorMessage name="confirmPassword" component="div" />
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
