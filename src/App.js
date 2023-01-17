import "./App.css";
import GoogleProfile from "./components/google-profile";
import GoogleloginLogout from "./components/google-login-logout";
import IntroPage from "./components/intro-page";
import GoogleFitWeight from "./components/google-fit-weight";
import useLocalStorage from "./hooks/use-local-storage";

const App = () => {
  const [profile, setProfile] = useLocalStorage("profile", null);
  const [token, setToken] = useLocalStorage("token", null);

  const isLoggedIn = () => Boolean(token) && Boolean(profile);

  const handleLoginSuccess = (resp) => {
    setProfile(resp.profileObj);
    setToken(resp.tokenObj);
  };

  const handleLogoutSuccess = () => {
    setProfile(null);
    setToken(null);
  };

  return (
    <>
      <header>
        <section>
          <h1>Google weight ⚖️</h1>
        </section>
        <section>
          <GoogleProfile profile={profile} compact />
          <GoogleloginLogout
            loggedIn={isLoggedIn()}
            onLoginSuccess={handleLoginSuccess}
            onLogoutSuccess={handleLogoutSuccess}
          />
        </section>
      </header>
      <main>
        <section>
          {!isLoggedIn() ? <IntroPage /> : <GoogleFitWeight token={token} />}
        </section>
      </main>
    </>
  );
};

export default App;
