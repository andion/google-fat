import "./App.css";
import { useState } from "react";
import GoogleProfile from "./components/google-profile";
import GoogleloginLogout from "./components/google-login-logout";
import IntroPage from "./components/intro-page";
import GoogleFitWeight from "./components/google-fit-weight";

const App = () => {
  const [profile, setProfile] = useState(null);
  const [token, setToken] = useState(null);

  const loggedIn = Boolean(token);

  const handleLoginSuccess = (resp) => {
    console.log("LOGIN >>>>", resp);
    setProfile(resp.profileObj);
    setToken(resp.tokenObj);
  };

  const handleLogoutSuccess = (resp) => {
    console.log("LOGOOUTED", resp);
    setProfile(null);
    setToken(null);
  };

  return (
    <>
      <header className="centered">
        <h1>Am I FAT?</h1>
      </header>
      <main>
        <section className="centered">
          {loggedIn ? (
            <>
              <GoogleProfile profile={profile} compact />
              <GoogleFitWeight token={token} />
            </>
          ) : (
            <IntroPage />
          )}
        </section>
        <section className="centered">
          <GoogleloginLogout
            loggedIn={loggedIn}
            onLoginSuccess={handleLoginSuccess}
            onLogoutSuccess={handleLogoutSuccess}
          />
        </section>
      </main>
    </>
  );
};

export default App;
