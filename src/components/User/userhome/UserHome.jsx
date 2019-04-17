import React, { useEffect } from 'react'

export default function UserHome() {
    useEffect(() => {
        document.title = 'Home'
        return () => {
            document.title = ''
        };
    }, [])
    return (
        <h1>
            User Home
    </h1>
    )
}
