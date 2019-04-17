import React, { useEffect } from 'react'

export default function UserAccount() {
    useEffect(() => {
        document.title = 'Account'
        return () => {
            document.title = ''
        };
    }, [])
    return (
        <h1>
            Account
        </h1>
    )
}
