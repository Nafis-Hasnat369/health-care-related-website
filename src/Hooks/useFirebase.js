import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseAuthentication from "../Firebase/firebase.init";


firebaseAuthentication();


const useFirebase = _ => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState({});
    const [password, setPassword] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();

    const newSignIn = _ => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => setUser(result.user))
            .catch(error => setError(error.message))
    }

    const signInUsingEmail = _ => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => setUser(result.user))
            .catch(error => setError(error.message))
    }

    const signInUsingGoogle = _ => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => setUser(result.user))
            .catch(error => setError(error.message))
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
        email,
        setEmail,
        setPassword,
        error,
        newSignIn,
        signInUsingEmail,
        signInUsingGoogle,
        logOut
    }
}
export default useFirebase;