import React from 'react';
import { TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';

const InputTextField = (props) => {
  const { label, name, type, rows, multiline } = props;
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <TextField
      label={label}
      variant="outlined"
      error={!!errors[name]}
      helperText={errors[name]?.message ?? ''}
      fullWidth
      type={type}
      multiline={multiline}
      rows={rows}
      {...register(name)}
    />
  );
};

export default InputTextField;
