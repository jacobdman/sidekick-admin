// Firebase
import * as firebaseAuth from 'firebase/auth';

export const signOut = async () => {
  const auth = await firebaseAuth.getAuth();
  await firebaseAuth.signOut(auth);
};

export const getAuth = async () => await firebaseAuth.getAuth();
