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
    <div className="App">
      <h1>Google FAT</h1>
      <GoogleLogin
        clientId={process.env.REACT_APP_CLIENT_ID}
        buttonText="Login"
        onSuccess={handleLoginSuccess}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
      {profile && <GoogleProfile profile={profile} />}
    </div>
  );
};

export default App;
