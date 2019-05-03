import React from 'react'
import { Select, MenuItem, FormControl, InputLabel, FormHelperText } from '@material-ui/core';

const SelectField = React.memo(function NCSelectField(props) {
    let meta = props.meta
    return (
        <FormControl key={props.name}>
            <InputLabel>{meta.label || props.name}</InputLabel>
            <Select
                name={`${props.section}#${props.name}`}
                autoWidth={meta.autoWidth}
                classes={meta.classes}
                displayEmpty={meta.displayEmpty}
                inputProps={meta.inputProps}
                MenuProps={meta.MenuProps}
                multiple={meta.multiple}
                native={meta.native}
                onChange={props.change}
                readOnly={props.readOnly || false}
                renderValue={meta.renderValue}
                SelectDisplayProps={meta.SelectDisplayProps}
                value={props.state || ''}
                variant='outlined'
            >
                {props.options.map(
                    option => <MenuItem key={option.value} value={option.value} >
                            {option.text}
                        </MenuItem>
                    )}
            </Select>
            <FormHelperText>{meta.helperText || ''}</FormHelperText>
        </FormControl>
    )
}
)

SelectField.defaultProps = {
    autoWidth: true,
    classes: {},
    displayEmpty: false,
    inputProps: {},
    MenuProps: {},
    multiple: false,
    native: false,
    renderValue: null,
    SelectDisplayProps: {},
    variant: 'outlined'
}

export default SelectField