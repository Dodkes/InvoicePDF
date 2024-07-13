import { Formik, Field, ErrorMessage, Form } from 'formik'
import * as Yup from 'yup'
import { useEffect, useState } from 'react';

interface FormValues {
  email: string
  password: string
}

export default function InvoiceForm() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:3000/users') // Replace with your server's URL
  //     .then(response => response.json())
  //     .then(data => setData(data))
  //     .catch(error => console.error('Error:', error));
  // }, []);
  
  
  
  const initialValues: FormValues = { email: '', password: '' }
  
  return (
    <div>
        <h1>Fakturačné údaje</h1>
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
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                setSubmitting(false)
            }, 400)
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
