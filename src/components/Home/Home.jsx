import React, { useEffect } from 'react'

export default function Home() {

    useEffect(() => {
        document.title = `${document.title} - Welcome!`
        return () => {
            document.title = ''
        };
    }, [])

    return (
        <div>
            <h1>Home Page</h1>
        </div>
    )
}

