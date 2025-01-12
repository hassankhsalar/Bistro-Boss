import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../Firebase/firebase.config";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //sign in user
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password).then((result) => {
      setUser(result.user); // Update user state here
      console.log("User after signIn:", result.user);

      return result;
    });
  };
  //Log out user
  const LogOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //update user Profile
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    })
  }

  //check user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); // Stop loading after checking auth state
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [auth]);

  //send functions
  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    LogOut,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{ children }</AuthContext.Provider>
  );
};

export default AuthProvider;
