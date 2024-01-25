"use client"
import { useEffect, useState } from "react";
import { AuthContext } from "../context/auth-context";
import firebase from "firebase/app";
import { auth } from "../firebase/firebaseConfig";

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser: any) => {
      setUser(firebaseUser);
    });

    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};