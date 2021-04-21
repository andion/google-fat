// Returned from google: email, familyName, givenName, googleId, imageUrl, name
import "./google-profile.css";

const GoogleProfile = ({ profile }) => {
  const { email, googleId, imageUrl, name } = profile;
  return (
    <div className="profile">
      <img
        src={imageUrl}
        referrerpolicy="no-referrer" //https://stackoverflow.com/questions/40570117/http403-forbidden-error-when-trying-to-load-img-src-with-google-profile-pic
        alt={`PIC for google id: ${googleId}`}
      />

      <div class="profile-info">
        <h1>{name}</h1>
        <a href={`mailto:${email}`}>{email}</a>
        <p>GoogleId: {googleId}</p>
      </div>
    </div>
  );
};

export default GoogleProfile;
