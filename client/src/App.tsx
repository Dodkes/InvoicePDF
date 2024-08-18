import "./App.css";
import LoginForm from "./components/LoginForm";
import AccountDashboard from "./components/AccountDashboard";
import { useState } from "react";

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
  const [activeUser, setActiveUser] = useState<object>({});

  return (
    <div className="App">
      {!isLoggedIn ? (
        <LoginForm
          setIsLoggedIn={setIsLoggedIn}
          setAutenthicationFailed={setAutenthicationFailed}
          setActiveUser={setActiveUser}
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
