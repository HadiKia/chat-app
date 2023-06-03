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
      navigate("/")
      return;
    }

    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": "85a40496-4109-40b3-9b7b-3cccfed7fd75",
          "user-name": user.email,
          "user-secret": user.uid,
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
                "private-key": "291d6340-a6af-4b88-91c2-eb4e268768d7",
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
    navigate("/")
  };

  if (!user || loading) return "Loading";

  return (
    <div className="container max-w-screen-xl mx-auto text-[#202427]">
      <div className="px-5">
        <Navbar logoutHandler={logoutHandler} />
      </div>
      <ChatEngine
        height="calc(100vh - 97px)"
        projectID="85a40496-4109-40b3-9b7b-3cccfed7fd75"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
};

export default Chats;
