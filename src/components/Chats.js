import React, { useState, useEffect, useContext } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import axios from "axios";

// Components
import Navbar from "./Navbar";

// Context
import { AuthContext } from "../contexts/AuthContextProvider";

const Chats = () => {
  const [loading, setLoading] = useState(true);
  const user = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }

    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": "ee1156a8-62cc-49d1-a44c-80a4db8d6dd8",
          "user-name": user.email,
          "user-secret": user.uid
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formdata = new FormData();
        formdata.append("email", user.email);
        formdata.append("username", user.email);
        formdata.append("secret", user.uid);
        getFile(user.photoURL).then((avatar) => {
          formdata.append("avatar", avatar, avatar.name);
          axios
            .post("https://api.chatengine.io/users/", formdata, {
              headers: {
                "private-key": "ad625f46-e868-4e3c-b83d-481cf0c3065a",
              },
            })
            .then(() => setLoading(false))
            .catch((error) => console.log(error));
        });
      });
  }, [user, navigate]);

  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };

  const logoutHandler = async () => {
    await auth.signOut();
    navigate("/");
  };

  if (!user || loading) {
    return (
      <h2 className="absolute top-[40%] left-0 right-0 font-medium text-xl">Loading ...</h2>
    )
  }

  return (
    <div className="container max-w-screen-xl mx-auto text-[#202427]">
      <div className="px-5">
        <Navbar logoutHandler={logoutHandler} />
      </div>
      <ChatEngine
        height="calc(100vh - 97px)"
        projectID="ee1156a8-62cc-49d1-a44c-80a4db8d6dd8"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
};

export default Chats;
