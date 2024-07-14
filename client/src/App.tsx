import './App.css';
import LoginForm from './components/LoginForm';
import Account from './components/Account';
import { useState, useEffect } from 'react';

export interface FormValues {
  email: string
  password: string
}

export interface BackendData extends FormValues {
  name: string
}


function App() {
const [login, setLogin] = useState(false)
const [backendData, setBackendData] = useState<BackendData[]>([])

async function getAPI() {
    const response = await fetch('/api')
    const jsonData = await response.json()

    setBackendData(jsonData)
}

useEffect(() => {
  getAPI()
}, [])

  return (
    <div className="App">
      {!login ? <LoginForm setLogin={setLogin} backendData={backendData} /> : <Account/>}
    </div>
  )
}

export default App;
