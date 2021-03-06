import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Chats from "./Chats";
import ChatView from "./ChatView";
import { login, logout, selectUser } from "./features/appSlice";
import { auth } from "./firebase";
import Header from "./Header";
import LandingPage from "./LandingPage";
import Login from "./Login";
import Preview from "./Preview";
import WebcamCapture from "./WebcamCapture";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            username: authUser.displayName,
            profilePic: authUser.photoURL,
            id: authUser.uid,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      {/* <Header />
      <LandingPage /> */}
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <img
              className="app__logo"
              src="https://logos-world.net/wp-content/uploads/2020/04/Snapchat-Logo-2013-2019.png"
              alt=""
            />
            <div className="app__body">
              <div className="app__bodyBackground">
                <Switch>
                  <Route path="/chats/view">
                    <ChatView />
                  </Route>
                  <Route path="/chats">
                    <Chats />
                  </Route>
                  <Route path="/preview">
                    <Preview />
                  </Route>
                  <Route exact path="/">
                    <WebcamCapture />
                  </Route>
                </Switch>
              </div>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
