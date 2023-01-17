import "./google-login-logout.css";
import { GoogleLogin, GoogleLogout } from "react-google-login";

const clientId = process.env.REACT_APP_CLIENT_ID;

const GoogleLoginLogout = ({
  loggedIn,
  onLogoutSuccess,
  onLoginSuccess,
  onLogoutFailure = console.error,
  onLoginFailure = console.error,
}) => (
  <div>
    {loggedIn ? (
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onLogoutSuccess}
        onFailure={onLogoutFailure}
        render={(renderProps) => (
          <button
            className="logout"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            logout➡
          </button>
        )}
      />
    ) : (
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onLoginSuccess}
        onFailure={onLoginFailure}
        cookiePolicy={"single_host_origin"}
        scope="https://www.googleapis.com/auth/fitness.body.read"
      />
    )}
  </div>
);

export default GoogleLoginLogout;
