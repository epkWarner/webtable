import React, { useEffect } from 'react'

export default function ActiveGames() {

    useEffect(() => {
        document.title = 'Active Games'
        return () => {
            document.title = ''
        };
    }, [])

    return (
        <h1>
            Active Games
        </h1>
    )
}
