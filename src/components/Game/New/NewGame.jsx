import React, { useEffect } from 'react'

export default function NewGame() {

    useEffect(() => {
        document.title = 'New Game'
        return () => {
            document.title = ''
        };
    }, [])

    return (
        <h1>
            Create New Game
    </h1>
    )
}
