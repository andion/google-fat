import "./App.css";
import { useState } from "react";
import GoogleProfile from "./components/google-profile";
import GoogleloginLogout from "components/google-login-logout";
import { GoogleLogin, GoogleLogout } from "react-google-login";

const App = () => {
  const [profile, setProfile] = useState(null);
  const [token, setToken] = useState(null);

  const handleLoginSuccess = (resp) => {
    console.log("LOGIN", resp);
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
        {profile ? (
          <GoogleProfile profile={profile} />
        ) : (
          <section class="centered">
            <h2>
              Am I overweight?
              <br />
              What am I?
              <br />
              Am I something?
              <br />
              Let's find out
              <br />
            </h2>
          </section>
        )}
        <GoogleloginLogout
          loggedIn={Boolean(token)}
          onLoginSuccess={handleLoginSuccess}
          onLogoutSuccess={handleLogoutSuccess}
        />
      </main>
    </>
  );
};

export default App;
