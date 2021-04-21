// email: "andion@gmail.com"
// familyName: "Andion"
// givenName: "Lucas"
// googleId: "112748252982613966658"
// imageUrl: "https://lh3.googleusercontent.com/a-/AOh14GivtBSKRY8XC9wIay8W7ZooGQLk7b7kocG5sV3YuQ=s96-c"
// name: "Lucas Andion"

const GoogleProfile = ({ profile }) => {
  const { email, googleId, imageUrl, name } = profile;
  return (
    <div>
      <h1>{name}</h1>
      <a href={`mailto:${email}`}>{email}</a>
      <img
        src={imageUrl}
        referrerpolicy="no-referrer" //https://stackoverflow.com/questions/40570117/http403-forbidden-error-when-trying-to-load-img-src-with-google-profile-pic
        alt={`PIC for google id: ${googleId}`}
      />
    </div>
  );
};

export default GoogleProfile;
