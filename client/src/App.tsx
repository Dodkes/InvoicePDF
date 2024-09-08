import "./App.css";
import LoginForm from "./components/LoginForm";
import AccountDashboard from "./components/AccountDashboard";
import { useState } from "react";
import RegisterForm from "./components/RegisterForm";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [authenticationFailed, setAutenthicationFailed] =
    useState<boolean>(false);
  const [providerData, setProviderData] = useState<any>({});
  const [costumerData, setCostumerData] = useState<any>({});
  const [registerScreen, setRegisterScreen] = useState<boolean>(false);

  const [signedUser, setSignedUser] = useState<string>("");

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
              setSignedUser={setSignedUser}
              setIsLoggedIn={setIsLoggedIn}
              setAutenthicationFailed={setAutenthicationFailed}
              setProviderData={setProviderData}
              setCostumerData={setCostumerData}
            />
            <button onClick={() => setRegisterScreen(true)}>
              Register Mode
            </button>
          </>
        )
      ) : (
        <AccountDashboard
          setIsLoggedIn={setIsLoggedIn}
          providerData={providerData}
          costumerData={costumerData}
          signedUser={signedUser}
        />
      )}
      {authenticationFailed && <p>Authentication failed !</p>}
    </div>
  );
}

export default App;
