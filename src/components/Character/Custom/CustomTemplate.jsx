import React, { useReducer, useState, useEffect } from 'react'
import { Paper, Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import ControlPoint from '@material-ui/icons/ControlPoint'
import AddFieldForm from './subs/AddFieldForm';
import AddSectionForm from './subs/AddSectionForm';
import NewCharacter from '../New/NewCharacter';

const styles = {
    paper: {
        height: '50vh',
        overflow: 'auto'
    }
}

function CustomTemplate(props) {

    const [template, dispatch] = useReducer(buildTemplate, { sections: {} })
    const [showForm, setShowForm] = useState('')
    const [activeSection, setActiveSection] = useState('')

    useEffect(() => {
        console.log(template)
        return () => {
        };
    }, [template])

    function buildTemplate(state, action) {
        switch (action.type) {
            case 'addsection':
                let sections = state.sections
                sections = { ...sections, [action.section.name]: { fields: {} } };
                return { ...state, sections }
            case 'killsection':

                break;
            case 'addfield':
                let fields = state.sections[action.section].fields
                fields = { ...fields, [action.field.name]: action.field.template }
                return { ...state, ...state.sections[action.section], fields }
            case 'killfield':

                break;
            default:
                return state
        }
    }

    const handleClick = event => {
        setShowForm(event.currentTarget.name)
    }

    return (
        <Grid container spacing={16}>
            <Grid item xs={12}>
                <h1>Custom Template</h1>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Button variant='contained' color='primary' name='section' onClick={handleClick}><ControlPoint />Add Section</Button>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Button variant='contained' color='primary' name='field' onClick={handleClick}><ControlPoint /> Add Field</Button>
            </Grid>
            <Grid item xs={12}>
                {showForm === 'field' ? <AddFieldForm dispatch={dispatch} section={activeSection} setSection={setActiveSection} /> : showForm === 'section' ? <AddSectionForm dispatch={dispatch} section={activeSection} setSection={setActiveSection} /> : <></>}
            </Grid>
            <Grid item xs={12}>
                <Paper style={styles.paper}>
                    <NewCharacter template={template} />
                </Paper>
            </Grid>
        </Grid>
    )
}

export default CustomTemplate

