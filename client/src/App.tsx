import './App.css';
import PdfComponent from './components/PdfComponent';
import InvoiceForm from './components/InvoiceForm';

function App() {
  return (
    <div className="App">
      <InvoiceForm />
      <PdfComponent />
    </div>
  )
}

export default App;
