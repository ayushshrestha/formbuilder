"use client"
import { auth , googleProvider} from "../firebase/firebase-config";
import { createUserWithEmailAndPassword,signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    console.log(auth?.currentUser?.email);
    console.log(auth?.currentUser?.photoURL);
  const signIn = async () => {
    try {
    await createUserWithEmailAndPassword(auth, email, password);
    } catch (err){
      console.error(err);
    }
  };
  const signInWithGoogle = async () => {
    try {
    await signInWithPopup(auth,googleProvider);
    } catch (err){
      console.error(err);
    }
  };
  const logOut = async () => {
    try {
    await signOut(auth);
    } catch (err){
      console.error(err);
    }
  };
  return (
    <div className="w-96 flex flex-col gap-3">
      <input 
        placeholder="Email" 
        onChange={(e) => setEmail(e.target.value)} 
        className="p-3 bg-white rounded-md"
        />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        className="p-3 bg-white rounded-md"
      />
      <button 
        className="bg-slate-800 p-3 text-white rounded-md" 
        onClick={signIn}
        > Signin</button>
      <button 
        className="bg-slate-800 p-3 text-white rounded-md" 
        onClick={signInWithGoogle}
      > Signin with google</button>
      <button 
        className="bg-slate-800 p-3 text-white rounded-md" 
        onClick={logOut}
      > logOut</button>
    </div>
  );
};