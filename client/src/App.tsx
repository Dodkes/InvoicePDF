import "./App.css";
import LoginForm from "./components/LoginForm";
import AccountDashboard from "./components/AccountDashboard";
import { useState } from "react";
import RegisterForm from "./components/RegisterForm";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [authenticationFailed, setAutenthicationFailed] =
    useState<boolean>(false);
  const [activeUser, setActiveUser] = useState<any>({});
  const [registerScreen, setRegisterScreen] = useState<boolean>(false);

  return (
    <div className="App">
      {!isLoggedIn ? (
        registerScreen ? (
          <>
            <RegisterForm />
            <button onClick={() => setRegisterScreen(false)}>Login mode</button>
          </>
        ) : (
          <>
            <LoginForm
              setIsLoggedIn={setIsLoggedIn}
              setAutenthicationFailed={setAutenthicationFailed}
              setActiveUser={setActiveUser}
            />
            <button onClick={() => setRegisterScreen(true)}>
              Register Mode
            </button>
          </>
        )
      ) : (
        <AccountDashboard
          setIsLoggedIn={setIsLoggedIn}
          signedUser={activeUser}
        />
      )}
      {authenticationFailed && <p>Authentication failed !</p>}
    </div>
  );
}

export default App;
