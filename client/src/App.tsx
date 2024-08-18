import "./App.css";
import LoginForm from "./components/LoginForm";
import AccountDashboard from "./components/AccountDashboard";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [authenticationFailed, setAutenthicationFailed] =
    useState<boolean>(false);
  const [activeUser, setActiveUser] = useState<any>({});

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
      {authenticationFailed && <p>Authentication failed !</p>}
    </div>
  );
}

export default App;
