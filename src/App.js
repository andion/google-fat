import "./App.css";
import { useState } from "react";
import GoogleLogin from "react-google-login";
import GoogleProfile from "./components/google-profile";

const responseGoogle = (response) => {
  console.log(response);
};

const App = () => {
  const [profile, setProfile] = useState();

  const handleLoginSuccess = ({ profileObj }) => {
    console.log(profileObj);
    setProfile(profileObj);
  };

  return (
    <>
      <header class="centered">
        <h1>Am I FAT?</h1>
      </header>
      <main>
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
          <GoogleLogin
            clientId={process.env.REACT_APP_CLIENT_ID}
            buttonText="Login"
            onSuccess={handleLoginSuccess}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </section>
        {profile && <GoogleProfile profile={profile} />}
      </main>{" "}
    </>
  );
};

export default App;
