import { Formik, Field, ErrorMessage, Form } from 'formik'
import { useEffect, useState } from 'react'
import * as Yup from 'yup'

interface FormValues {
  email: string
  password: string
}

interface BackendData extends FormValues {
  name: string
}

export default function InvoiceForm() {
  const [backendData, setBackendData] = useState<BackendData[]>([])

async function getAPI() {
    const response = await fetch('/api')
    const jsonData = await response.json()

    setBackendData(jsonData)
}

useEffect(() => {
  getAPI()
}, [])


function login (values: FormValues) {

  const findInDB = backendData.filter((user) => user.email === values.email)
  console.log(findInDB)
}

  const initialValues: FormValues = { email: 'john.doe@email.sk', password: 'john.doe@email.skjohn.doe@email.sk' }
  
  return (
    <div>
        <h1>Fakturačné údaje</h1>

        {/* {(typeof backendData[0] === 'undefined')? <p>loading</p> : <p>{JSON.stringify(backendData)}</p>} */}

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
