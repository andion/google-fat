import { GoogleLogin, GoogleLogout } from "react-google-login";

const clientId = process.env.REACT_APP_CLIENT_ID;

const GoogleLoginLogout = ({
  loggedIn,
  onLogoutSuccess,
  onLoginSuccess,
  onLogoutFailure = console.error,
  onLoginFailure = console.error,
}) =>
  loggedIn ? (
    <GoogleLogout
      clientId={clientId}
      buttonText="Logout"
      onLogoutSuccess={onLogoutSuccess}
      onFailure={onLogoutFailure}
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
  );

export default GoogleLoginLogout;
