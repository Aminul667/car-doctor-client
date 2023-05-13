import { createContext, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

export const authContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const authInfo = {
        user,
        loading
    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;