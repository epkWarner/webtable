import React, { useState, useContext } from 'react'
import { Fab, SwipeableDrawer } from '@material-ui/core';
import menuItems from '../../../constants/menu-items';
import MenuSection from '../MainMenu/subs/MenuSection';
import { Auth } from '../../../context/Auth';
import Add from '@material-ui/icons/Add'
import Close from '@material-ui/icons/Close'

const styles = {
    closed: {
        position: 'fixed',
        bottom: '40vh',
        right: '5vw',
        backgroundColor: '#13a506',
        color: '#ffffff'
    },
    open: {
        position: 'fixed',
        bottom: '50vh',
        right: '5vw',
        backgroundColor: '#e20b0b',
        color: '#ffffff'
    }
}


function MobileMenu(props) {

    const [open, setOpen] = useState(false)
    const [expanded, setExpanded] = useState('')
    const auth = useContext(Auth)

    function toggleDrawer () {
        setOpen(!open)
    }

    function toggler(name) {
        expanded === name ? 
        setExpanded('') 
        : setExpanded(name)
    }

    return (
        <>
            <Fab
                style={
                    open ? 
                    styles.open 
                    : styles.closed
                }
                onClick={toggleDrawer}
            >
                {
                    !open ?
                    <Add /> 
                    : <Close />
                }
            </Fab>
            <SwipeableDrawer
                anchor='right'
                open={open}
                onClose={toggleDrawer}
                onOpen={toggleDrawer}
            >
                {
                    Object.keys(menuItems).map(
                        key =>
                        !menuItems[key].protected ?
                            <MenuSection
                                items={menuItems[key].collapse}
                                key={key}
                                name={key}
                                toggle={toggler}
                                expanded={expanded}
                                toggleMenu={toggleDrawer}
                            /> 
                            : auth.authState ?
                                <MenuSection
                                    key={key}
                                    items={menuItems[key].collapse}
                                    name={key} toggle={toggler}
                                    expanded={expanded}
                                    toggleMenu={toggleDrawer}
                                /> 
                                : <></>
                    )
                }
            </SwipeableDrawer>
        </>
    )
}

export default MobileMenu
