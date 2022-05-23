import { signOut } from "@firebase/auth";
import React, { useEffect } from "react";
import userService from "../service/userService";
import auth from "../utils/firebase.init";
import Loading from "./Loading";

const Logout = () => {
  useEffect(() => {
    userService.logout();
    signOut(auth);
    window.location = "/";
  }, []);

  return <Loading />;
};

export default Logout;
