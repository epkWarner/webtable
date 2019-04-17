import React from 'react'
import { TextField } from '@material-ui/core';

const InputField = React.memo(function NCTextField(props) {
  const meta = props.field.meta
  return (
    <TextField
      autoComplete={meta.autoComplete}
      autoFocus={meta.autoFocus || false}
      disabled={meta.disabled || false}
      error={meta.error || false}
      FormHelperTextProps={meta.FormHelperTextProps || {}}
      fullWidth={meta.fullWidth || true}
      helperText={meta.helperText || ''}
      id={props.name}
      InputLabelProps={meta.InputLabelProps || {}}
      InputProps={meta.InputProps || {}}
      label={meta.label || ''}
      margin={meta.margin || 'none'}
      multiline={meta.multiline || false}
      name={`${props.section}#${props.name}`}
      onChange={props.change}
      placeholder={meta.placeholder || ''}
      readOnly={props.readOnly || false}
      required={meta.required || false}
      rows={meta.rows || 1}
      rowsMax={meta.rowsMax || 1}
      select={meta.select || false}
      SelectProps={meta.SelectProps || {}}
      type={meta.inputType || 'text'}
      value={props.state || ''}
      variant='outlined'

    />
  )
}
)

export default InputField