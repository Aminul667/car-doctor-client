import { useContext } from "react";
import { authContext } from "../../../providers/AuthProvider";

const SocialLogin = () => {
  const { googleSignIn } = useContext(authContext);

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result);
      })
      .then((error) => console.log(error));
  };

  return (
    <div>
      <div className="divider">OR</div>
      <div className="text-center">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-circle btn-outline"
        >
          G
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
