import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { LoginValues } from "../types";

export default function LoginForm(props: {
  setIsLoggedIn: (arg: boolean) => void;
  setAutenthicationFailed: (arg: boolean) => void;
  setActiveUser: (arg: object) => void;
}) {
  const loginInitials: LoginValues = {
    email: "john.doe@email.sk",
    password: "john.doe@email.skjohn.doe@email.sk",
  };
  // const loginInitials: FormValues = {
  //   email: "roth.malder@email.com",
  //   password: "roth.malder@email.comroth.malder@email.com",
  // };
  // const loginInitials: FormValues = {
  //   email: "jane.doe@email.eu",
  //   password: "jane.doe@email.eujane.doe@email.eu",
  // };

  async function Login(values: LoginValues) {
    const response = await fetch("/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (response.status === 200) {
      const data = await response.json();
      if (data) {
        props.setIsLoggedIn(true);
        props.setAutenthicationFailed(false);
        props.setActiveUser(data);
      }
    } else if (response.status === 401) {
      props.setAutenthicationFailed(true);
    }
  }

  return (
    <div>
      <h1>Sign in</h1>
      <Formik
        initialValues={loginInitials}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Ivalid email address")
            .required("Required"),
          password: Yup.string()
            .min(8, "Required at lease 8 symbols")
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
