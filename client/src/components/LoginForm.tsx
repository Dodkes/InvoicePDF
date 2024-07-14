import { Formik, Field, ErrorMessage, Form } from 'formik'
import * as Yup from 'yup'
import { FormValues } from '../App'

export default function LoginForm(props: any) {

function login (values: FormValues) {
  const findInDB = props.backendData.filter((user: FormValues) => user.email === values.email)
  if (findInDB.length !== 0) {
    props.setLogin(true)
  }
}

  const initialValues: FormValues = { email: 'john.doe@email.sk', password: 'john.doe@email.skjohn.doe@email.sk' }
  
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
            login(values)
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
