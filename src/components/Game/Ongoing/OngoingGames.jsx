import React, { useEffect } from 'react'

export default function OngoingGames() {

    useEffect(() => {
        document.title = 'Ongoing Games'
        return () => {
            document.title = ''
        };
    }, [])

    return (
        <h1>
            Ongoing Games
    </h1>
    )
}
