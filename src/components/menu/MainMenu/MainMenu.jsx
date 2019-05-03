import React, { useState, useContext } from 'react'
import { List, ClickAwayListener } from '@material-ui/core'
import menuItems from '../../../constants/menu-items'
import { Auth } from '../../../context/Auth'
import MenuSection from './subs/MenuSection';
import { withRouter } from 'react-router'

function MainMenu() {
    const [expanded, setExpanded] = useState('')
    const auth = useContext(Auth)
    const miKeys = Object.keys(menuItems)

    function toggler(name) {
        expanded === name ? 
        setExpanded('') 
        : setExpanded(name)
    }

    return (
        <ClickAwayListener onClickAway={toggler}>
            <List component='nav'>
                {
                    miKeys.map(
                        key => !menuItems[key].protected ?
                        <MenuSection
                            items={menuItems[key].collapse}
                            key={key}
                            name={key}
                            toggle={toggler}
                            expanded={expanded}
                        /> 
                        : auth.authState ?
                            <MenuSection
                                key={key}
                                items={menuItems[key].collapse}
                                name={key}
                                toggle={toggler}
                                expanded={expanded}
                            /> :
                            <></>
                    )
                }
            </List>
        </ClickAwayListener>
    )
}

export default withRouter(MainMenu)
