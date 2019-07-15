import React, { useEffect, useState } from 'react'
import Template1 from '../../../constants/DefaultTemplate';
import NCSection from './subs/NCSection';
import { Grid, LinearProgress } from '@material-ui/core';

export default function NewCharacter(props) {

    const [loading, setLoading] = useState(true)
    const [formState, setFormState] = useState({})

    let Template = props.template ?
        Object.keys(props.template.sections).length > 0 ?
            props.template
            : Template1
        : Template1

    useEffect(() => {
        document.title = 'New Character'
        setFormState({})

        let sections = {}
        Object.keys(Template.sections).map(
            section => {
                let fields = {}
                Object.keys(Template.sections[section].fields).map(
                    field => {
                        return (
                            fields = {
                                ...fields,
                                [Template.sections[section].fields[field].meta.label]: Template.sections[section].fields[field].defaultValue
                                    || null
                            }
                        )
                    }
                )
                return sections = { ...sections, [section]: fields }
            })

        setFormState({ ...formState, ...sections })
        setLoading(false)

        return () => {
            document.title = ''
        };

    }, [Template])


    const handleChange = (e) => {
        let [section, name] = e.target.name.split('#')
        setFormState({ ...formState, [section]: { ...formState[section], [name]: e.target.value } })
    }

    if (loading) {
        return (
            <>
                <h1>New Character</h1>
                <LinearProgress />
            </>
        )
    } else {
        return (
            <>
                <h1>New Character</h1>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <form autoComplete="off">
                            <Grid container spacing={16}>
                                {
                                    Object.keys(Template.sections).map(
                                        section => {
                                            return (
                                                <Grid item xs={12} key={section}>
                                                    <NCSection
                                                        title={section}
                                                        state={formState}
                                                        change={handleChange}
                                                        section={Template.sections[section]}
                                                    />
                                                </Grid>
                                            )
                                        }
                                    )
                                }
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </>
        )
    }
}
