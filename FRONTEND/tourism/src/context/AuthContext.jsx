import { supabase } from '../supabaseClient';

const { useEffect, useContext, createContext, useState } = require('react');

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [session, setSession] = useState(undefined);

    const signUp = async (email, password) => {
        try {
            const {data, error} = await supabase.auth.signUp({
                email: email.toLowerCase(),
                password: password
            });
            if(error) {
                console.error("Sign-in error:", error.message); 
                return { success: false, error: error.message };
            }
            return {success: true, data};
        } catch (error) {
            console.log(error);
            return {success: false, error};
        }
    };

    const login = async (email, password) => {
        try {
            const {data, error} = await supabase.auth.signInWithPassword({
                email: email.toLowerCase(),
                password: password
            });

            if(error) {
                console.error("Sign-in error:", error.message); 
                return { success: false, error: error.message };
            }

            return { success: true, error};
        } catch (error) {
            console.log(error);
            return {success: false, error};
        }
    }

    const logout = async () => {
        try {
            const {error} = await supabase.auth.signOut();
            if(error) {
                console.error("Sign-out error:", error.message); 
                return { success: false, error: error.message };
            }
            return { success: true };
        } catch (error) {
            console.log(error);
            return {success: false, error};
        }
    } 

    useEffect(() => {
        supabase.auth.getSession.then(({data: {session}}) => {
            setSession(session);
        });

        supabase.auth.OnAuthStateChange((_event, session) => {
            setSession(session);
        });
    }, []);

    return (
        <AuthContext.Provider value= {{signUp, login, logout, session}}>
            {children}
        </AuthContext.Provider>
    )
}

export const UseAuth = () => {
    useContext(AuthContext);
}