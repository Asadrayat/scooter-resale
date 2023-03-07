import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/Firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password, name, role) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password, name, role);
    }
    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }
    const signIn = (email, password ,role) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password ,role);
    }

    const updateUser = (userInfo) => {
        return updateProfile(user, userInfo);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user observing');
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [])

    const authInfo = {
        createUser,
        signIn,
        updateUser,
        logOut,
        user,
        providerLogin,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;