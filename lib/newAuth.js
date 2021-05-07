import firebase, { auth, db } from '../lib/firebase';
import React, { useContext, createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { Router } from 'next/router';

export const AuthContext = createContext(); // Tutaj można umieścić default Value

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const handleUser = async (user) => {
    if (user) {
      Cookies.set('uid', user.uid, true);
      // console.log('user - ', user);
      // console.log('user name - ', name);
      const formatedUser = await formatUser(user);

      // const decodedToken = await firebase.auth().currentUser.getIdTokenResult();
      // console.log(decodedToken.claims.stripeRole);

      db.collection('users').doc(user.uid).set({ formatedUser }, { merge: true });

      setCurrentUser(formatedUser);
      // Cookies.set('token', user.za, true);

      setLoading(false);
      return formatedUser;
    } else {
      setCurrentUser(false);
      // Cookies.remove('token', user.za);
      Cookies.remove('uid');

      setLoading(false);
      return false;
    }
  };

  const signUp = async (email, password) => {
    return await auth.createUserWithEmailAndPassword(email, password).then((response) => {
      return handleUser(response.user);
    });
  };

  const logIn = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logOut = () => {
    return auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = auth.onIdTokenChanged(handleUser);

    return () => unsubscribe();
  }, []);

  const value = {
    currentUser,
    signUp,
    logIn,
    logOut,
  };

  const getStripeRole = async () => {
    await firebase.auth().currentUser.getIdToken(true);
    const decodedToken = await firebase.auth().currentUser.getIdTokenResult();
    return decodedToken.claims.stripeRole || 'free';
  };

  const formatUser = async (user) => {
    console.log('OFF - ', user);
    const token = await user.getIdToken();
    return {
      uid: user.uid,
      email: user.email,
      // name,
      // token: user.za, // token JWT, generowany automatycznie przez firebase przy zakładaniu konta
      provider: user.providerData[0].providerId,
      stripeRole: await getStripeRole(),
      token,
    };
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};
