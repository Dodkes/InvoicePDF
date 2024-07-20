import PdfComponent from "./PdfComponent"
import { Formik, Field, Form } from 'formik'



export default function Account(props: {signedUser: any, setIsLoggedIn: (arg: boolean) => void}) {

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
              <div>Údaje o dodávateľovi:</div>
              <label htmlFor="">Názov dodávateľa: </label>
              <Field type='text' name='provider' value={props.signedUser.organisation}/>
              <label htmlFor="">Mesto: </label>
              <Field type='text' name='city' value={props.signedUser.city}/>
              <label htmlFor="">Ulica: </label>
              <Field type='text' name='street' value={props.signedUser.street}/>
              <label htmlFor="">PSČ: </label>
              <Field type='text' name='zip' value={props.signedUser.ZIP}/>
              <label htmlFor="">Krajina: </label>
              <Field type='text' name='country' value={props.signedUser.country}/>
              <label htmlFor="">IČO: </label>
              <Field type='number' name='ico' value={props.signedUser.ICO}/>
              <label htmlFor="">DIČ: </label>
              <Field type='number' name='dic' value={props.signedUser.DIC}/>
              <label htmlFor="">Registrovaný: </label>
              <Field type='text' name='registered' value={props.signedUser.registered}/>
              <label htmlFor="">IBAN: </label>
              <Field type='text' name='IBAN' value={props.signedUser.IBAN}/>
              <label htmlFor="">Faktúru vystavuje: </label>
              <Field type='text' name='name' value={props.signedUser.name}/>
          </Form>
        </Formik>

        <PdfComponent />
    </div>
  )
}
