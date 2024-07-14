import { Formik, Field, ErrorMessage, Form } from 'formik'
import * as Yup from 'yup'
import { FormValues } from '../App'

export default function LoginForm(props: {login: (arg: FormValues) => void, setIsLoggedIn: (arg: boolean) => void, backendData: object}) {



  // const initialValues: FormValues = { email: 'john.doe@email.sk', password: 'john.doe@email.skjohn.doe@email.sk' }
  const initialValues: FormValues = { email: 'roth.malder@email.com', password: 'roth.malder@email.comroth.malder@email.com' }
  // const initialValues: FormValues = { email: 'jane.doe@email.eu', password: 'jane.doe@email.eujane.doe@email.eu' }

  
  return (
    <div>
        <h1>Prihlásenie</h1>
        <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Neplatná emailová adresa')
            .required('Povinné'),
          password: Yup.string()
            .min(8, 'Heslo musí mať aspoň 8 znakov')
            .required('Povinné')
        })}
        onSubmit={(values, { setSubmitting }) => {
            props.login(values)
            setSubmitting(false)
        }}
        >
            {({ isSubmitting }) => (
         <Form>
           <div>
             <label htmlFor="email">Email</label>
             <Field type="email" name="email" placeholder="Váš email" />
             <ErrorMessage name="email" component="div" />
           </div>
           <div>
             <label htmlFor="password">Heslo</label>
             <Field type="password" name="password" placeholder="Vaše heslo" />
             <ErrorMessage name="password" component="div" />
           </div>
           <button type="submit" disabled={isSubmitting}>
             Odoslať
           </button>
         </Form>
       )}
        </Formik>
    </div>
  )
}
