// User info that comes from google
// email
// familyName
// givenName
// googleId
// imageUrl
// name (this is `${givenName} ${familyName}`)

import Section from "components/section";

const GoogleProfile = ({ profile }) => {
  const { email, googleId, imageUrl, name } = profile;
  return (
    <article>
      <img
        src={imageUrl}
        referrerpolicy="no-referrer" //https://stackoverflow.com/questions/40570117/http403-forbidden-error-when-trying-to-load-img-src-with-google-profile-pic
        alt={`PIC for google id: ${googleId}`}
      />
      <h1>{name}</h1>
      <a href={`mailto:${email}`}>{email}</a>
    </article>
  );
};

export default GoogleProfile;
