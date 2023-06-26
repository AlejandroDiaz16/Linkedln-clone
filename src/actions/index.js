import { auth, provider } from "../firebase";

export function signInAPI() {
  return (dispatch) => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // Dispatch any necessary actions with the user data
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  };
}
