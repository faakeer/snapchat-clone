import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/appSlice";
import { auth, provider } from "./firebase";
import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch(
          login({
            username: result.user.displayName,
            profilePic: result.user.photoURL,
            id: result.user.uid,
          })
        );
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://logos-world.net/wp-content/uploads/2020/04/Snapchat-Logo-2013-2019.png"
          alt=""
        />
        <Button onClick={signIn} variant="outlined">
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default Login;
