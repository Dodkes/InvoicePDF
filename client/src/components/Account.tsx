import PdfComponent from "./PdfComponent"

export default function Account(props: {foundUser: object}) {
  return (
    <div>
        <h1>Account</h1>
        <p>{JSON.stringify(props.foundUser)}</p>
        <PdfComponent />
    </div>
  )
}
