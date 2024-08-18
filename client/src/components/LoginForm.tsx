import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { FormValues } from "../types";

export default function LoginForm(props: {
  setIsLoggedIn: (arg: boolean) => void;
  setAutenthicationFailed: (arg: boolean) => void;
  setActiveUser: (arg: object) => void;
}) {
  // const initialValues: FormValues = { email: 'john.doe@email.sk', password: 'john.doe@email.skjohn.doe@email.sk' }
  const initialValues: FormValues = {
    email: "roth.malder@email.com",
    password: "roth.malder@email.comroth.malder@email.com",
  };
  // const initialValues: FormValues = { email: 'jane.doe@email.eu', password: 'jane.doe@email.eujane.doe@email.eu' }

  async function Login(values: FormValues) {
    const response = await fetch("/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const data = await response.json();

    if (data.length === 1) {
      props.setIsLoggedIn(true);
      props.setAutenthicationFailed(false);
      props.setActiveUser(data[0]);
    } else {
      props.setAutenthicationFailed(true);
    }
  }

  return (
    <div>
      <h1>Sign in</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Neplatná emailová adresa")
            .required("Required"),
          password: Yup.string()
            .min(8, "Heslo musí mať aspoň 8 znakov")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          Login(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="formik-login-container">
            <div className="login-email">
              <label htmlFor="email">Email</label>
              <br />
              <Field type="email" name="email" placeholder="Your email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div className="login-password">
              <label htmlFor="password">Password</label>
              <br />
              <Field
                type="password"
                name="password"
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
