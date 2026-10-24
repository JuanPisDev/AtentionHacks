import {
    createContext,
    useContext,
    useState,
} from "react";

const AuthContext = createContext(null);

export function AuthProvider({children}){
    const [accessToken, setAccessToken] = useState(
        () => sessionStorage.getItem("accessToken")
    );

    const [refreshToken, setRefreshToken] = useState(
        () => sessionStorage.getItem("refreshToken")
    );

    function login(tokens){
        sessionStorage.setItem("accessToken", tokens.access);
        sessionStorage.setItem("refreshToken", tokens.refresh);

        setAccessToken(tokens.access);
        setRefreshToken(tokens.refresh);
    }

    function logout(){
        sessionStorage.removeItem("accessToken");
        sessionStorage.removeItem("refreshToken");

        setAccessToken(null);
        setRefreshToken(null);
    }

    const value = {
        accessToken,
        refreshToken,
        isAuthenticated: Boolean(accessToken),
        login,
        logout,
    };
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}   

export function useAuth(){
    return useContext(AuthContext);
}
