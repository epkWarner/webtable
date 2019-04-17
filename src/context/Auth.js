import React, { useState } from 'react'

const Auth = React.createContext()

function AuthProvider(props) {
    const [authState, setAuth] = useState(true)

    const login = () => {
        setAuth(true)
    }

    const logout = () => {
        setAuth(false)
    }
    return (
        <Auth.Provider
            value={
                {
                    authState: authState,
                    login: login,
                    logout: logout
                }
            }
        >
            {props.children}
        </Auth.Provider>
    )
}

const AuthConsumer = Auth.Consumer

export { AuthProvider, AuthConsumer, Auth }


