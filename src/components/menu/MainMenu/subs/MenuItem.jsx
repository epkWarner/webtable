import React from 'react'
import { ListItem, ListItemText } from '@material-ui/core';
import { NavLink } from 'react-router-dom'

const styles = {
  a: {
    textDecoration: 'none',
    color: 'black',
    textAlign: 'center',
    backgroundColor: '#949596'
  }
}

export default function MenuItem(props) {
  let link = props.item.link
  return (
    <NavLink 
    style={styles.a} 
    to={link} 
    onClick={props.toggleMenu || null}
    >
      <ListItem 
      dense 
      button 
      divider
      >
        <ListItemText primaryTypographyProps={{ variant: 'h6', align: 'center' }}>
          {props.name}
        </ListItemText>
      </ListItem>
    </NavLink>
  )
}