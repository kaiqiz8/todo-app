import { createContext, useContext, useState } from "react";

//1: create a context
export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);


//2: share the created conext with other componnets

export default function AuthProvider({children}) {

    //3: put some state in the context
//    const [number, setNumber] = useState(10);
   const [isAuthenticated, SetAuthenticated] = useState(false);

   function login(username, password) {
    if (username==='Kaiqi' && password === 'dummy'){
        SetAuthenticated(true);
        return true;
    } else {
        SetAuthenticated(false);
        return false;
    }
   }

   function logout() {
    SetAuthenticated(false);
   }


//    setInterval(() => setNumber(number + 1), 10000);

    const valueToBeShared = {isAuthenticated, SetAuthenticated, login, logout};

    return (
        <AuthContext.Provider value={{isAuthenticated, SetAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>

    )
}


