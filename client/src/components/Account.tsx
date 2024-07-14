import PdfComponent from "./PdfComponent"
import { Formik, Field, Form } from 'formik'



export default function Account(props: {signedUser: any, setIsLoggedIn: (arg: boolean) => void}) {
  console.log(props.signedUser)

  return (
    <div>
        <h3>Account: {props.signedUser.name}</h3>
        <button onClick={() => props.setIsLoggedIn(false)}>Log out</button>

        <Formik
        initialValues={{name: '', surname: ''}}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false)
          console.log(values)
        }}
        >
          <Form>
            <div>
              <label htmlFor="">Dodávateľ: </label>
              <Field type='text' name='kokot'/>
            </div>
            <div>
              <label htmlFor="">Dodávateľ: </label>
              <Field type='text' name='kokot'/>
            </div>
          </Form>
        </Formik>

        <PdfComponent />
    </div>
  )
}
