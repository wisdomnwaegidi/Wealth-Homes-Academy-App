import { GoogleLogin } from "@react-oauth/google";

const GoogleComp = () => {
  const handleSuccess = (response) => {
    console.log(response);
  };

  const handleError = (error) => {
    console.error(error);
  };

  return (
    <GoogleLogin
      clientId='YOUR_CLIENT_ID'
      buttonText='Sign in with Google'
      onSuccess={handleSuccess}
      onFailure={handleError}
    />
  );
};

export default GoogleComp;
