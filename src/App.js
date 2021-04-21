import { useState } from "react";
import GoogleLogin from "react-google-login";
import GoogleProfile from "components/google-profile";
import Section from "components/section";

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
      <header>
        <nav>
          <h1>Am I Fat?</h1>
          <ul>
            <a href="#">
              <li>Login</li>
            </a>
          </ul>
        </nav>
      </header>
      <main>
        {profile ? (
          <GoogleProfile profile={profile} />
        ) : (
          <article>
            <h2>
              Am I <mark>overweight</mark>?<br />
              What do I know? <br />
              Do I know thinkgs? <br />
              Let's find out...
            </h2>
            <aside>
              <p>
                Just let me check your Google Fit data
                {"  "}
                <GoogleLogin
                  clientId={process.env.REACT_APP_CLIENT_ID}
                  buttonText="Login"
                  onSuccess={handleLoginSuccess}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                />
              </p>
            </aside>
          </article>
        )}
      </main>
      <footer>
        <hr />
        <p>
          <a href="mailto:lucas@trabe.io">Contact</a>
        </p>
      </footer>
    </>
  );
};

export default App;
