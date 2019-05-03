import React from 'react';

const SettingsContext = React.createContext()

function SettingsProvider(props) {
    return (
        <SettingsContext.Provider
            value={

            }
        >
            {props.children}
        </SettingsContext.Provider>
    )
}