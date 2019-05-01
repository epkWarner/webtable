import React, { useState } from 'react'
import { Button, TextField, FormGroup } from '@material-ui/core';

function AddSectionForm(props) {

    const [name, setName] = useState('')

    function handleSubmit() {
        props.dispatch({
            type: 'addsection',
            section: { name: name }
        })
        props.setSection(name)
        setName('')

    }

    function handleChange(e) {
        setName(e.target.value)
    }

    return (
        <>
            <FormGroup>
                <TextField onChange={handleChange} />
            </FormGroup>
            <Button onClick={handleSubmit}>Submit</Button>
        </>
    )
}

export default AddSectionForm

