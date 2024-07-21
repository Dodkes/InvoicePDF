import PdfComponent from "./PdfComponent"
import { Formik, Field, Form } from 'formik'

export default function Account(props: {signedUser: any, setIsLoggedIn: (arg: boolean) => void}) {
  return (
    <div>
        <h3>Account: {props.signedUser.name}</h3>
        <button onClick={() => props.setIsLoggedIn(false)}>Log out</button>

        <Formik
        // initialValues={{email: 'dodo.zitt@gmail.com', name: 'Misko'}}
        initialValues={props.signedUser}

        onSubmit={(values, { setSubmitting }) => {
          console.log(values)
          setSubmitting(false)
        }}
        >
            {({ isSubmitting }) => (
              <Form>
                <div>Údaje o dodávateľovi</div>
             <label htmlFor="email">Email</label>
             <Field type="email" name="email" />

             <label htmlFor="name">Faktúru vystavuje</label>
             <Field type="text" name="name" />

             <label htmlFor="organisation">Dodávateľ</label>
             <Field type="text" name="organisation" />

              <label htmlFor="city">Mesto: </label>
              <Field type='text' name='city'/>

              <label htmlFor="street">Ulica: </label>
              <Field type='text' name='street'/>

              <label htmlFor="ZIP">PSČ: </label>
              <Field type='number' name='ZIP'/>

              <label htmlFor="country">Krajina: </label>
              <Field type='text' name='country'/>

              <label htmlFor="ICO">IČO: </label>
              <Field type='number' name='ICO'/>

              <label htmlFor="DIC">DIČ: </label>
              <Field type='number' name='DIC'/>

              <label htmlFor="IBAN">IBAN: </label>
              <Field type='text' name='IBAN'/>

              <label htmlFor="registered">Registrovaný: </label>
              <Field type='text' name='registered'/>

              <button type="submit">Submit</button>
              </Form>


          //     <label htmlFor="">Faktúru vystavuje: </label>
          //     <Field type='text' name='name' />
          //     <button type="submit" disabled={isSubmitting}>Uložiť</button>
          // </Form>
       )}

        </Formik>

        <PdfComponent />
    </div>
  )
}
