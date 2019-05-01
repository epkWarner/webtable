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
        // console.log('customtemplate useeffect', template)
        return () => {
        };
    }, [template])

    function buildTemplate(state, action) {
        let newSections = state.sections
        let newSection = state.sections[action.section]
        let newFields
        switch (action.type) {
            case 'addsection':
                newSections = { ...newSections, [action.section.name]: { fields: {} } };
                return { ...state, sections: newSections }
            case 'killsection':

                break;
            case 'addfield':
                newFields = state.sections[action.section].fields !== undefined ? state.sections[action.section].fields : {}
                newFields = { ...newFields, [action.field.name]: action.field.template }
                newSection = { ...newSection, fields: newFields }
                newSections = { ...newSections, [action.section]: newSection }
                return { ...state, sections: newSections }
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
                {showForm === 'field' ? <AddFieldForm dispatch={dispatch} section={activeSection} setSection={setActiveSection} sections={Object.keys(template.sections)} /> : showForm === 'section' ? <AddSectionForm dispatch={dispatch} section={activeSection} setSection={setActiveSection} /> : <></>}
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

