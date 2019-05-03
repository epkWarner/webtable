import React, { useState } from 'react'
import InputField from '../../../Shared/InputField';
import { Grid, FormControlLabel, Switch } from '@material-ui/core';
import GridItem from '../../../Shared/GridItem';

function NumberFields(props) {
    const [state, setState] = useState({
        name: '',
        min: 0,
        max: 0
    })
    const [switchValue, setSwitchValue] = useState(true)

    let section = props.section

    function handleChange(e) {
        let [section, name] = e.currentTarget.name.split('#')

        setState({ ...state, [name]: e.currentTarget.value })

        props.change(name, e.currentTarget.value)
        name === 'required' ? setSwitchValue(!switchValue) : setSwitchValue(switchValue)
    }

    return (
        <Grid container spacing={8}>
            <GridItem>
                <InputField
                    change={handleChange}
                    state={state.name}
                    section={section}
                    name="name"
                    field={{
                        meta: {
                            label: 'Field Name'
                        }
                    }}
                />
            </GridItem>
            <GridItem>
                <InputField
                    change={handleChange}
                    name='min'
                    section={section}
                    state={state.min}
                    field={{
                        meta: {
                            inputType: 'number',
                            InputProps: {
                                inputProps: {
                                    min: '0'
                                }
                            },
                            label: 'Minumum Value'
                        }
                    }}
                />
            </GridItem>
            <GridItem>
                <InputField
                    change={handleChange}
                    name='max'
                    state={state.max}
                    section={section}
                    field={{
                        meta: {
                            inputType: 'number',
                            InputProps: {
                                inputProps: {
                                    min: '0'
                                }
                            },
                            label: 'Maximum Value'
                        }
                    }}
                />
            </GridItem>
            <GridItem>
                <FormControlLabel
                    label='Required'
                    labelPlacement='start'
                    control={
                        <Switch
                            color="primary"
                            name={`${section}#required`}
                            onChange={handleChange}
                            value={switchValue}
                        />
                    }
                />
            </GridItem>
        </Grid>
    )
}

export default NumberFields