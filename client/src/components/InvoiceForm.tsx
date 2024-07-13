import { Formik, Field, ErrorMessage, Form } from 'formik'
import { useEffect, useState } from 'react'
import * as Yup from 'yup'

interface FormValues {
  email: string
  password: string
}

export default function InvoiceForm() {
  const [backendData, setBackendData] = useState([])




async function getAPI() {
    const response = await fetch('/api')
    const jsonData = await response.json()

    setBackendData(jsonData)
}


  const initialValues: FormValues = { email: '', password: '' }
  
  return (
    <div>
        <h1>Fakturačné údaje</h1>

        {(typeof backendData[0] === 'undefined')? <p>loading</p> : <p>{JSON.stringify(backendData)}</p>}

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
          getAPI()

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
