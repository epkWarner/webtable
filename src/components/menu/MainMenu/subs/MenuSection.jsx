import React from 'react'
import { 
    Typography, 
    List, 
    ListItem, 
    Collapse 
} from '@material-ui/core';
import MenuItem from './MenuItem'

function MenuSection(props) {
    let itemKeys = Object.keys(props.items)
    let items = props.items

    function renderItems() {
        return itemKeys.map(
            key => items[key].type.protected ?
            <MenuItem
                key={key}
                item={items[key]}
                name={key}
                toggleMenu={props.toggleMenu || null}
                style={{ width: '100%' }}
            />
            : <MenuItem
                key={key}
                item={items[key]}
                name={key}
                style={{ width: '100%' }}
            />
        )
    }

    return (
        <>
            <ListItem 
            button 
            onClick={() => props.toggle(props.name)} 
            name={props.name} 
            divider
            >
                <Typography 
                align='center' 
                color='primary' 
                inline
                >
                    {props.name}
                </Typography>
            </ListItem>
            <Collapse in={props.expanded === props.name}>
                <List component='nav' disablePadding>
                    {renderItems()}
                </List>
            </Collapse>
        </>
    )
}

export default MenuSection

