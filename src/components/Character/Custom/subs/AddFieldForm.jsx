import React, { useState, useEffect } from 'react'
import { FormGroup, Collapse, List, ListItem, ListItemText, Select, MenuItem, Grid, Input, Tooltip, Button, Typography } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons'
import Options from '../../../../constants/options';
import DefaultInputs from '../../../../constants/DefaultInputs';
import NumberFields from './NumberFields';

function AddFieldForm(props) {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState('')
    const [field, setField] = useState({})
    const [section, setSection] = useState(props.section)
    let [Picker, Words, Numbers] = DefaultInputs

    useEffect(() => {
        // console.log('addfieldform useeffect', field)
        return () => {
        };
    }, [field])

    function toggleOpen() {
        setOpen(!open)
    }

    function handleSelect(e) {
        switch (e.target.value) {
            case 'Selection':
                setField(Picker)
                break;
            case 'Number':
                setField(Numbers)
                break
            default:
                break;
        }
        setSelected(e.target.value)
        setOpen(true)
    }

    function editField(name, value) {
        // console.log('addFieldForm editField', 'name:', name, 'value:', value)
        let meta = field.meta
        let newProps = field.meta.InputProps.inputProps
        let newMeta
        switch (name) {
            case 'name':
                newMeta = { ...meta, label: value }
                setField({ ...field, meta: newMeta })
                break;
            case 'min':
                newProps = { ...newProps, min: value }
                meta.InputProps.inputProps = newProps
                setField({ ...field, meta: meta })
                break;
            case 'max':
                newProps = { ...newProps, max: value }
                meta.InputProps.inputProps = newProps
                setField({ ...field, meta: meta })
                break;
            case 'required':
                value = value === 'true' ? true : false
                newMeta = { ...meta, required: value }
                setField({ ...field, meta: newMeta })
                break;
            default:
                break;
        }
    }

    function handleClick() {
        props.dispatch({ type: 'addfield', field: { name: field.meta.label, template: field }, section: section })
    }

    function formSwitch() {
        switch (selected) {
            case 'Number':
                return <NumberFields change={editField} section={props.section} />
            default:
                return <Typography>Select a field type to see detailed options</Typography>;
        }
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
                                                    <Collapse in={open}>
                                                        {formSwitch()}
                                                    </Collapse>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Button onClick={handleClick}>
                                                        Add
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </ListItemText>
                                    </ListItem>
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

