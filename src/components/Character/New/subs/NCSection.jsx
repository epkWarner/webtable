import React from 'react'
import { FormControl, Typography, Grid, withStyles, Divider } from '@material-ui/core';
import SelectField from '../../../Shared/SelectField';
import InputField from '../../../Shared/InputField';

const styles = theme => ({
    root: {
        padding: '10px',
    },
});

function NCSection(props) {

    function renderFields(field) {
        let res
        switch (field.type) {
            case 'select':
                // console.log('renderFields', props.title, field.meta.label)
                res =
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={field.meta.label}>
                        <SelectField
                            id={field.meta.label}
                            meta={field.meta}
                            change={props.change}
                            state={props.state[props.title][field.meta.label]}
                            options={field.options}
                            name={field.meta.label}
                            fullWidth={true}
                            section={props.title}
                        />
                    </Grid>

                break;
            case 'text':
                // console.log('renderFiels', props.title, field.meta.label)
                res = (
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={field.meta.label}>
                        <FormControl >
                            <InputField
                                change={props.change}
                                state={props.state[props.title][field.meta.label]}
                                name={field.meta.label}
                                field={field}
                                section={props.title}
                            />
                        </FormControl>
                    </Grid>
                )
                break;
            default:
        }
        return res
    }

    return (
        <Grid item xs={12} key={props.title}>
            <Grid container spacing={8}>
                <Grid item xs={12}>
                    <Typography variant='h5'>{props.title.replace('_', ' ')}</Typography>
                    <Divider />
                </Grid>
                {
                    Object.keys(props.section.fields).map(field => renderFields(props.section.fields[field]))
                }
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(NCSection)