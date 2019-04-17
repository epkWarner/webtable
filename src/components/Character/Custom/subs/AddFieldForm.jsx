import React, { useState } from 'react'
import { FormGroup, Collapse, List, ListItem, ListItemText, Paper, Select, MenuItem, Grid, Input, Tooltip, Button } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons'
import Options from '../../../../constants/options';
import DefaultInputs from '../../../../constants/DefaultInputs';

function AddFieldForm(props) {
    let [open, setOpen] = useState(false)
    let [selected, setSelected] = useState('')
    let [field, setField] = useState({})
    let [Picker, Words] = DefaultInputs

    function toggleOpen() {
        setOpen(!open)
    }

    function handleSelect(e) {
        switch (e.target.value) {
            case 'Selection':
                setField(Picker)
                break;
            case 'Number':
                let field = Words
                field = { ...Words, ...Words.meta, type: 'number' }
                setField(field)
                break
            default:
                break;
        }
        setSelected(e.target.value)
    }

    function handleClick() {
        props.dispatch({ type: 'addfield', field: { name: 'default', template: field }, section: props.section })
    }

    return (
        <Grid container spacing={8}>
            <Grid item xs={12}>
                <form>
                    <Grid container spacing={8}>
                        <Grid item xs={12}>
                            <FormGroup>
                                <List>
                                    <ListItem>
                                        <ListItemText>
                                            <Grid container spacing={8}>
                                                <Grid item xs={10}>
                                                    <Select
                                                        autoWidth={true}
                                                        value={selected}
                                                        input={
                                                            <Input
                                                                id='field-type' fullWidth={true}
                                                            />
                                                        }
                                                        onChange={handleSelect}
                                                    >
                                                        {Object.keys(Options).map(option =>
                                                            <Tooltip
                                                                key={option}
                                                                title={Options[option].tip}
                                                                value={option}
                                                            >
                                                                <MenuItem
                                                                    component='p'
                                                                >
                                                                    {option}
                                                                </MenuItem>
                                                            </Tooltip>
                                                        )}
                                                    </Select>
                                                </Grid>
                                                <Grid item xs={2}>
                                                    {open ? <ExpandLess onClick={toggleOpen} /> : <ExpandMore onClick={toggleOpen} />}
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Button onClick={handleClick}>
                                                        Add
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </ListItemText>
                                    </ListItem>
                                    <Collapse in={open}>
                                        <Paper>
                                            hello
                        </Paper>
                                    </Collapse>
                                </List>
                            </FormGroup>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    )
}

export default AddFieldForm

