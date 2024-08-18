import "./App.css";
import LoginForm from "./components/LoginForm";
import AccountDashboard from "./components/AccountDashboard";
import { useState, useEffect } from "react";

export interface FormValues {
  email: string;
  password: string;
}

export interface BackendData extends FormValues {
  name: string;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authenticationFailed, setAutenthicationFailed] =
    useState<boolean>(false);
  const [backendData, setBackendData] = useState<BackendData[]>([]);
  const [activeUser, setActiveUser] = useState<object>({});

  async function getAPI() {
    const response = await fetch("/api");
    const jsonData = await response.json();

    setBackendData(JSON.parse(jsonData));
    console.log(JSON.parse(jsonData));
  }

  useEffect(() => {
    getAPI();
  }, []);

  function login(values: FormValues) {
    const findInDB = backendData.filter(
      (user: FormValues) =>
        user.email === values.email && user.password === values.password
    );
    console.log(findInDB);
    if (findInDB.length !== 0) {
      setIsLoggedIn(true);
      setActiveUser(findInDB[0]);
      setAutenthicationFailed(false);
    } else {
      setAutenthicationFailed(true);
    }
  }

  return (
    <div className="App">
      {!isLoggedIn ? (
        <LoginForm
          login={login}
          setIsLoggedIn={setIsLoggedIn}
          backendData={backendData}
        />
      ) : (
        <AccountDashboard
          setIsLoggedIn={setIsLoggedIn}
          signedUser={activeUser}
        />
      )}
      {authenticationFailed ? <p>Authentication failed !</p> : null}
    </div>
  );
}

export default App;
