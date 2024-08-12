import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const Authcontext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn =(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }

  const logOut = ()=>{
    return signOut(auth)

  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (createUser) => {
      console.log("user is on state ", createUser);
      setUser(createUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    signIn,
    logOut
  };
  return (
    <Authcontext.Provider value={authInfo}>{children}</Authcontext.Provider>
  );
};

export default AuthProvider;
