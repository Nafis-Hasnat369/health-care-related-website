import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseAuthentication from "../Firebase/firebase.init";


firebaseAuthentication();


const useFirebase = _ => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();

    const newSignIn = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUsingEmail = (email, password) => {
        console.log(email, password)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInUsingGoogle = _ => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
        });
        return () => unsubscribed;
    }, [auth])

    const logOut = _ => {
        signOut(auth)
            .then(setUser({}))
    }

    return {
        user,
        setUser,
        error,
        setError,
        newSignIn,
        signInUsingEmail,
        signInUsingGoogle,
        logOut
    }
}
export default useFirebase;