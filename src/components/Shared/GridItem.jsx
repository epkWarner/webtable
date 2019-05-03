import React from 'react'
import { Grid } from '@material-ui/core';

export default function GridItem(props) {
    return (
        <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
        >
            {props.children}
        </Grid>
    )
}
