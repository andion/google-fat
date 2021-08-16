// Returned from google: email, familyName, givenName, googleId, imageUrl, name
import "./google-profile.css";

const GoogleProfileImage = ({ imageUrl, googleId, small }) => (
  <img
    className={small && "small"}
    src={imageUrl}
    referrerPolicy="no-referrer" //https://stackoverflow.com/questions/40570117/http403-forbidden-error-when-trying-to-load-img-src-with-google-profile-pic
    alt={`PIC for google id: ${googleId}`}
  />
);

const GoogleProfile = ({ profile, compact }) => {
  const Profile = compact ? CompactGoogleProfile : ExtendedGoogleProfile;
  return <Profile profile={profile} />;
};

const CompactGoogleProfile = ({ profile }) => {
  const { googleId, imageUrl, name } = profile;

  return (
    <section className="centered">
      <GoogleProfileImage small imageUrl={imageUrl} googleId={googleId} />
      <h1>{name}</h1>
    </section>
  );
};

const ExtendedGoogleProfile = ({ profile }) => {
  const { email, googleId, imageUrl, name } = profile;

  return (
    <div className="profile">
      <GoogleProfileImage imageUrl={imageUrl} googleId={googleId} />

      <div class="profile-info">
        <h1>{name}</h1>
        <a href={`mailto:${email}`}>{email}</a>
        <p>GoogleId: {googleId}</p>
      </div>
    </div>
  );
};

export default GoogleProfile;
