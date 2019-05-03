const Picker = {
    type: 'select',
    meta: {
        name: '',
        autoWidth: false,
        classes: {},
        displayEmpty: false,
        inputProps: {},
        MenuProps: {},
        multiple: false,
        native: false,
        readOnly: false,
        renderValue: false,
        SelectDisplayProps: {},
        value: '',
        variant: 'outlined'
    }
}

const Words = {
    type: 'text',
    meta: {
        autoComplete: '',
        autoFocus: false,
        disabled: false,
        error: false,
        FormHelperTextProps: {},
        fullWidth: true,
        helperText: '',
        id: '',
        InputLabelProps: {},
        InputProps: {
            fullWidth: true
        },
        label: '',
        margin: 'none',
        multiline: false,
        name: '',
        placeholder: '',
        readOnly: false,
        required: false,
        rows: 1,
        rowsMax: 1,
        select: false,
        SelectProps: {},
        type: 'text',
        value: '',
        variant: 'outlined'
    }
}

const Numbers = {
    type: 'text',
    meta: {
        autoComplete: '',
        autoFocus: false,
        disabled: false,
        error: false,
        FormHelperTextProps: {},
        fullWidth: true,
        helperText: '',
        id: '',
        InputLabelProps: {},
        InputProps: {
            fullWidth: true,
            inputProps: {
                min: '0',
            }
        },
        label: '',
        margin: 'none',
        multiline: false,
        name: '',
        placeholder: '',
        readOnly: false,
        required: false,
        rows: 1,
        rowsMax: 1,
        select: false,
        SelectProps: {},
        inputType: 'number',
        type: 'number',
        value: '',
        variant: 'outlined'
    }
}

export {Picker, Words, Numbers}