import React, { useEffect } from 'react'

export default function ExistingCharacters() {

    useEffect(() => {
        document.title = 'Characters'
        return () => {
            document.title = ''
        };
    }, [])

    return (
        <h1>
            Existing Characters
    </h1>
    )
}
