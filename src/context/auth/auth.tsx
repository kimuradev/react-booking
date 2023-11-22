import { createContext, useMemo, useState } from "react";

type AuthProviderProps = {
    children?: React.ReactNode;
}

type AuthContext = {
    signed: boolean,
    login: (data: string) => void,
    logout: () => void,
}

export const AuthContext = createContext<AuthContext | null>(null);

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<string | null>(null);

    const login = (data: string) => {
        setUser(data);
    };

    const logout = () => {
        setUser(null);
    };

    const value = useMemo(
        () => ({
            signed: !!user,
            login,
            logout
        }),
        [user]
    );
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}