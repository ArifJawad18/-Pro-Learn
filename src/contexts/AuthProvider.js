import React, { createContext } from 'react';
import {getAuth, signInWithPopup} from 'firebase/auth';
import app from '../../firebase/firebase.config';





export const AuthContext = createContext() 

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const user = {displayName: 'My User '}

    const ProviderLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }


    const authInfo = {user, ProviderLogin}

    return (
        <AuthContext.Provider value={ authInfo }>
            {children}

            
        </AuthContext.Provider>
    );
};

export default AuthProvider;